const Router = require("express").Router;
const PostController = require("../controllers/post-controller.js");
const PostSotrController = require("../controllers/post-sotr-controller.js")
const PostDokController = require("../controllers/post-dok-controller.js")
const PostKrabController = require("../controllers/post-krab-controller.js")
const PostPrRController = require("../controllers/post-prr-controller.js")
const PostJobController = require("../controllers/post-job-controller.js")
const router = new Router();

router.get("/show/card/", PostController.showAll);

router.post("/add/card", PostController.add);
router.post("/add/sotr", PostSotrController.add);
router.post("/add/dok", PostDokController.add);
router.post("/add/krab", PostKrabController.add);
router.post("/add/prr", PostPrRController.add);

// // Обработка ошибки 404
// router.get("*", function (req, res) {
//   res.status(404).send("<title>404</title><h1>404</h1>");
// });

module.exports = router;