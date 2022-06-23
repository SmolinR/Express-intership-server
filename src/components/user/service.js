const { Users, UserModel } = require('./model');

const UserService = {};

UserService.findAll = async () => Users;

UserService.emailUnique = async (email) => {
  for (let i = 0; i < Users.length; i += 1) {
    if (email === Users[i].email) {
      return false;
    }
  }
  return true;
};
UserService.findOne = async (email) => {
  const user = UserModel.findByEmail(email);
  return user;
};
UserService.patchOne = async (email, name) => {
  const user = UserModel.findByEmail(email);
  if (user) {
    user.name = name;
    return true;
  }
  return false;
};
UserService.deleteOne = async (email) => {
  const user = UserModel.findByEmail(email);
  if (user) {
    Users.splice(Users.indexOf(user), 1);
    return true;
  }
  return false;
};

module.exports = UserService;
