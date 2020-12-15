const express = require('express');
const router = express.Router();

const { signup, signin, signout,signupByAdmin, requireSignin,isAuth, isAdmin, } = require("../controllers/auth");
const { userSignupValidator } = require('../validator');
const { userById } = require("../controllers/user");

router.post("/signup", userSignupValidator, signup);
router.post("/signup/byadmin/:userId", requireSignin, isAuth, isAdmin, userSignupValidator, signupByAdmin);
router.post("/signin", signin);
router.get("/signout", signout);


router.param("userId", userById)
module.exports = router;