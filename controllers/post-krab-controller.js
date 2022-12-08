const Post = require("../models/post.js")
const Krab = require("../models/Krab")
const PostServices = require("../services/post-services");

class PostKrabController {
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

      const { id, text, text2 } = req.body;
      await Krab.create({id_krab: id, id_dok: text, id_instr: text2 });

    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new PostKrabController();
