const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById, getUser, read, update, purchaseHistory, addressById, deleteUser, allUsers, updateUserByAdmin, editAddress, addAddress, removeAddress } = require('../controllers/user');

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
router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);
// router.get('/user/:addressId/:userId', requireSignin, isAuth, editAddress);
router.post('/user/addAddress/:userId', requireSignin, isAuth, addAddress);
// router.get('/user/address/:addressId/:userId', requireSignin, isAuth, removeAddress);

// router.param('addId', addressById); 
router.param('userId', userById);


module.exports = router;
