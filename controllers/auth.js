const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler');
const jwt = require('jsonwebtoken'); // generate signed in token
const expressJwt = require('express-jwt') //for auth check

exports.signup = (req, res) => {
    console.log('req.body', req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                // error: 'Email has been taken'
                error: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};
exports.signupByAdmin = (req, res) => {
    console.log('req.body', req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                // err: errorHandler(err)
                error: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.signin = (req, res) => {
    //find the user based on email
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email dose not exist. Please signup'
            })
        }
        // if user is found make shure the email and pass match
        // create authenticate method
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: 'Email and password dont match'
            })
        }
        // generate signed token w user id and secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
        // persist the token as 't' in cookie w expire date
        res.cookie('t', token, { expire: new Date() + 9999 })
        // return res with user and token to frontend client
        const { _id, fName, lName, email, role, company } = user
        return res.json({ token, user: { _id, email, fName, lName, role, company } });
    })
}

exports.signout = (req, res) => {
    res.clearCookie('t');
    res.json({ message: 'Signout Success' });
};
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // added later
    userProperty: "auth"
});

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id
    if (!user) {
        return res.status(403).json({
            error: 'Access denied you need to sign in'
        });
    }
    next();
}

exports.isAdmin = (req, res, next) => {
    // so if user is standard or a client of a company access denied
    //admin needs value of 2
    if (req.profile.role === 0 || req.profile.role === 1) {
        return res.status(403).json({
            error: 'Admin resourse! Access Denied'
        });
    }
    next();
}
