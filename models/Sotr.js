const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class Sotr extends Model {
  otherPublicField;
}

Sotr.init(
  {
    id_sotr: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    familia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    otch: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    numt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    
    doljnost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  },
  {
    sequelize,
    modelName: "sotr",
  }
);

module.exports = Sotr;
