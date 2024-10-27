const express = require('express');
const { signUp, closeAccount, updatePassword, googleAuth, addUser } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signUp);
router.delete('/close-account', closeAccount);
router.put('/update-password', updatePassword);
router.post('/google-auth', googleAuth);
router.post('/add-user', addUser);

module.exports = router;