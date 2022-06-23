const UserService = require('./service');
const { UserModel } = require('./model');

const UserController = {};

UserController.get = async (req, res, next) => {
  try {
    if (req.query.email) {
      const { email } = req.query;
      const user = await UserService.findOne(email);
      if (user) {
        return res.status(200).json(user);
      }
      return res.status(404).json({ message: 'User not found!' });
    }
    const users = await UserService.findAll();
    if (users.length >= 1) {
      return res.status(200).json(users);
    }
    return res.status(404).json({ message: 'User list is empty' });
  } catch (error) {
    return next(error);
  }
};
UserController.createUser = async (req, res, next) => {
  try {
    const { email, name } = req.body;
    const uniq = await UserService.emailUnique(email);
    if (uniq) {
      UserModel.create(email, name);
      return res.status(201).json({ message: 'User signed-up!' });
    }
  } catch (error) {
    next(error);
  }
  return res.status(400).json({ message: 'Email must to be unique' });
};
UserController.patchUser = async (req, res, next) => {
  try {
    const { email, name } = req.body;
    const patchUser = await UserService.patchOne(email, name);
    if (patchUser) {
      return res.status(200).json({ message: 'User has been renamed!' });
    }
    return res.status(404).json({ message: 'User not found!' });
  } catch (error) {
    return next(error);
  }
};
UserController.deleteUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const deleteUser = await UserService.deleteOne(email);
    if (deleteUser) {
      return res.status(200).json({ message: 'User has been deleted' });
    }
    return res.status(404).json({ message: 'User not found!' });
  } catch (error) {
    return next(error);
  }
};
module.exports = UserController;
