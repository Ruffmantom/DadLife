exports.userSignupValidator = (req, res, next) => {
    req.check('userName', 'Please Add A Username').notEmpty()
    req.check('email', 'Email must be between 3 to 50 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 50
        });
    req.check('password', 'password is required').notEmpty()
    req.check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage("Password must contain a number")
        .matches(/\W|_/g)
        .withMessage("Password must contain a special character");
    req.check('isHuman', 'Please verify you are a human');
    const errors = req.validationErrors()
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError })
    }
    next();
};