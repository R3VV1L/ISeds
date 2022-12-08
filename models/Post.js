const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class Post extends Model {
  otherPublicField;
}

Post.init(
  {
    id_instr: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // Заголовок
    n_instr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Описание
    k_instr: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "instr",
  }
);

module.exports = Post;
