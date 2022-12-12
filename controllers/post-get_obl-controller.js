// const Job = require("../models/Job")
const PostServices = require("../services/post-services");
const sequelize = require("../database/db.js");

class PostGetOblController {
    // Просмотр всех постов
    async showAll(req, res) {
        try {
            sequelize
                .query('CALL get_obl("Работа")')
                .then(v => res.json(v));
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new PostGetOblController();