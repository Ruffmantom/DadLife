const User = require('../models/user');
const { Order } = require('../models/order');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};
// for Admin access
exports.getUser = (req, res) => {
    let chosenId = req.params.editUserId;
    console.log(chosenId)
    User.findById(chosenId).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        res.json(user);
    });
};
exports.allUsers = (err, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({
                error: 'Users search failed'
            });
        }
        res.json(users);
    });
}
// get back the address by the id
// exports.addressById = (req, res, next, id) => {
//     // console.log(req.profile._id) this gets back the user id
//     //console.log(id) //this gets back the address id
//     User.findOne({ _id: req.profile.id }, (err, user) => {
//         if (err || !user) {
//             return res.status(400).json({
//                 error: "User not found"
//             });
//         }
//         // let gotAdd = user.address.map((item) => {item._id === id});
//         // console.log(gotAdd)
//         // user.address.forEach((item, index)=>{
//         //     let got = item._id === id
//         //     console.log(got)
//         // })
//         let address = user.address;
//         // for(var i = 0; i < address.length; i++){
//         //     let gotAdd = [];
//         //     gotAdd.push(address[i]._id === id)
//         //     console.log(gotAdd)
//         // }
//         console.log(address[0]._id);
//         // console.log(user.address)
//         // console.log(gotAdd)
//     })
// };

exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

exports.update = (req, res) => {
    const { fName, lName, email, password, phone} = req.body;
    User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    message: "User was not updated"
                })
            }
            if (!fName || !lName || !email || !phone) {
                return res.status(400).json({
                    error: 'Please check empty fields'
                });
            } else {
                user.fName = fName;
                user.lName = lName;
                user.email = email;
                user.phone = phone;
            }

            if (password) {
                if (password.length < 6) {
                    return res.status(400).json({
                        error: 'Password should be min 6 characters long, should include at least one number and special character'
                    });
                } else {
                    user.password = password;
                }
            }
            user.save((err, updatedUser) => {
                if (err) {
                    console.log('USER UPDATE ERROR', err);
                    return res.status(400).json({
                        error: 'User update failed'
                    });
                }
                updatedUser.hashed_password = undefined;
                updatedUser.salt = undefined;
                res.json(updatedUser);
            });
        }
    );
    
};
exports.updateUserByAdmin = (req,res)=>{
    const { company, role } = req.body;
    const updatedId = req.params.updatedUserId;
    // console.log(company)
    // console.log(role)
    // console.log(updatedId)
    User.findByIdAndUpdate(
        updatedId,
        req.body,
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "User was not updated"
                })
            }
            else {
                user.company = company;
                user.role = role;
            }
            user.save((err, updatedUser) => {
                if (err) {
                    console.log('USER UPDATE ERROR', err);
                    return res.status(400).json({
                        error: 'User update failed'
                    });
                }
                res.json(updatedUser);
            });
        }
    );
}

// get the user and the address the user wantes to update
// then save to existing address document
// exports.editAddress = (req, res, addId) => {
//     User.findOne({ _id: req.profile._id }, (err, user) => {
//         if (err || !user) {
//             return res.status(400).json({
//                 error: 'User not found'
//             });
//         }
//         user.coll.findOne({ "address._id": ObjectId(addId) }, (err, address) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: 'Address not found'
//                 });
//             }
//             address.save((err, updatedAddress) => {
//                 if (err) {
//                     console.log('USER ADDRESS UPDATE ERROR', err);
//                     return res.status(400).json({
//                         error: 'Address update failed'
//                     });
//                 }
//                 res.json(updatedAddress);
//             });
//         });
//     });
// };
// add a new address
exports.addAddress = (req, res) => {
    const addedAddress = req.body;
    const address = { $push: { address: [addedAddress] } };

    User.findOne({ _id: req.profile._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user.updateOne(address, err => {
            if (err) {
                console.log('USER ADDRESS ADD ERROR', err);
                return res.status(400).json({
                    error: 'Address Add failed'
                });
            }
            res.json({ addedAddress });
        });
    });
};
// delete address
// exports.removeAddress = (req, res) => {
//     let addressId =  req.params.addressId
//     let query = { "address": { "$eq": addressId} };
//     User.findById(query, (err, removedAddress) => {
//         if (err) {
//             return res.status(400).json({
//                 error: 'Address Delete failed'
//             });
//         }
//         res.json({
//             message: `${removedAddress}`
//         });
//     })
// };

exports.addOrderToUserHistory = (req, res, next) => {
    let history = [];

    req.body.order.products.forEach(item => {
        history.push({
            _id: item._id,
            name: item.name,
            description: item.description,
            category: item.category,
            quantity: item.count,
            transaction_id: req.body.order.transaction_id,
            amount: req.body.order.amount
        });
    });

    User.findOneAndUpdate({ _id: req.profile._id }, { $push: { history: history } }, { new: true }, (error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update user purchase history'
            });
        }
        next();
    });
};

exports.purchaseHistory = (req, res) => {
    Order.find({ user: req.profile._id })
        .populate('user', '_id name')
        .sort('-created')
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(orders);
        });
};
exports.deleteUser = (req, res) => {
    let removeUserId = req.params.removeUserId;
    User.findByIdAndRemove(removeUserId, (err, user) => {
        // As always, handle any potential errors:
        if (err) return res.status(400).send(err);
        const response = {
            message: "User successfully deleted",
            id: user._id
        };
        return res.status(200).send(response);
    });
}