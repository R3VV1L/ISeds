require("dotenv").config();
const COMPANY = process.env.COMPANY;
const User = require("../models/User");

class UserServices {
  async reg(nickname, name, lastname) {
    try {
      // console.log(name, lastname)
      // await User.sync()
      await User.create({ nickname, name, lastname });
    } catch (err) {
      console.log(
        `---------------\n${COMPANY}_ERR: ${err.errors[0].message}\n---------------`
      );
    }
  }
}

module.exports = new UserServices();
