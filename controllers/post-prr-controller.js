const Post = require("../models/post.js")
const PrR = require("../models/PrR.js")
const PostServices = require("../services/post-services");

class PostPrRController {
  // Просмотр всех постов
  async showAll(req, res) {
    try {
      let allPost = PostServices.showAll();
      // console.log(await allPost);
      return res.json(await allPost)
    } catch (err) {
      console.log(err);
    }
  }

  // Добавление постов
  async add(req, res) {
    try {

      const { id, text, text2,  text3, text4, text5 } = req.body;
      await PrR.create({id_prR: id, id_sotr: text, id_krab: text2, oblast: text3, datar: text4, prmk: text5 });

    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new PostPrRController();
