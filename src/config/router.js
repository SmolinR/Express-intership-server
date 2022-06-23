const express = require('express');

const router = express.Router();
const UserController = require('../components/user/controller');
const { userPost, userPatch, userDelete } = require('../components/user/validation');
const validate = require('../middlewares/validate');

router.get('/user', UserController.get);
router.post('/user', validate(userPost), UserController.createUser);
router.patch('/user', validate(userPatch), UserController.patchUser);
router.delete('/user', validate(userDelete), UserController.deleteUser);

module.exports = router;
