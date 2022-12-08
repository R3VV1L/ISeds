const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class PrR extends Model {
  otherPublicField;
}

PrR.init(
  {
    id_prR: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    id_sotr: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    id_krab: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    oblast: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      datar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
      prmk: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    modelName: "prr",
  }
);

module.exports = PrR;
