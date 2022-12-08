const Post = require("../models/post.js")
const Sotr = require("../models/Sotr.js")
const PostServices = require("../services/post-services");

class PostSotrController {
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
      await Sotr.create({id_sotr: id, name: text, familia: text2, otch: text3, numt: text4, doljnost: text5 });

    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new PostSotrController();
