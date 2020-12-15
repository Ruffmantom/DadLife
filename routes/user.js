const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById, getUser, read, update, deleteUser, allUsers, updateUserByAdmin } = require('../controllers/user');

router.get('/secret', requireSignin, (req, res) => {
    res.json({
        user: 'got here yay'
    });
});

router.get('/user/:userId', requireSignin, isAuth, read);
router.get('/user/:editUserId/:userId', requireSignin, isAuth, isAdmin, getUser);
router.get('/users/all/:userId', requireSignin, isAuth, isAdmin, allUsers);
router.delete('/user/remove/:removeUserId/:userId', requireSignin, isAuth, isAdmin, deleteUser);
router.put('/user/:userId', requireSignin, isAuth, update);
router.put('/user/byadmin/:updatedUserId/:userId', requireSignin, isAuth, isAdmin, updateUserByAdmin);

router.param('userId', userById);


module.exports = router;