/* eslint-disable max-classes-per-file */
const Users = [];
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}
class UserModel {
  static create(email, name) {
    const user = new User(email, name);
    Users.push(user);
  }

  static findByEmail(email) {
    const user = Users.find((users) => users.email === email);
    return user;
  }
}

module.exports = { User, UserModel, Users };
