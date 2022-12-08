const Post = require("../models/post.js")
const Sotr = require("../models/Sotr.js")

const PostServices = require("../services/post-services");

class PostController {
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
      await Post.create({id_instr: id, n_instr: text, k_instr: text2 });

    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new PostController();
