const User = require('../models/user');
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

exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

exports.update = (req, res) => {
    const { name, email } = req.body;
    User.findByIdAndUpdate(
        req.params.userId,
        req.body, { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    message: "User was not updated"
                })
            }
            if (!name || !email) {
                return res.status(400).json({
                    error: 'Please check empty fields'
                });
            } else {
                user.name = fName;
                user.email = email;

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
exports.updateUserByAdmin = (req, res) => {
    const { company, role } = req.body;
    const updatedId = req.params.updatedUserId;
    // console.log(company)
    // console.log(role)
    // console.log(updatedId)
    User.findByIdAndUpdate(
        updatedId,
        req.body, { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "User was not updated"
                })
            } else {
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