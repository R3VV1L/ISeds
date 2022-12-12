require("dotenv").config();
const COMPANY = process.env.COMPANY;
const Dok = require("../models/Dok");
const Post = require("../models/Post");
const Sotr = require("../models/Sotr");
const Krab = require("../models/Krab");
const PrR = require("../models/PrR.js");
const Job = require("../models/Job");
const Auth = require("../models/Auth");
const NeedSotrs = require("../models/needSotrs");
const sequelize = require("../database/db.js");


class PostServices {
  async showAll() {
    try {
      let post = await Post.findAll();
      let sotr = await Sotr.findAll();
      let dok = await Dok.findAll();
      let krab = await Krab.findAll();
      let prr = await PrR.findAll();
      let job = await Job.findAll();
      let auth = await Auth.findAll();
      let needsotrs = await NeedSotrs.findAll();
      let get_obl = await sequelize.query('CALL get_obl("Работа")')
      return [post, sotr, dok, krab, prr, job, auth,needsotrs, get_obl];

    } catch (err) {
      console.log(
        err
      );
    }
  }
}



module.exports = new PostServices();
