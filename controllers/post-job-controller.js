const Job = require("../models/Job")
const PostServices = require("../services/post-services");

class PostJobController {
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
}
module.exports = new PostJobController();