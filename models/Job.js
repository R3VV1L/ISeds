const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class Job extends Model {
  otherPublicField;
}

Job.init(
  {
    id_krab: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    n_dok: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    familia: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      doljnost: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
      n_instr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      k_instr: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  },

  {
    sequelize,
    modelName: "job",
    timestamps: false,
  }
);

module.exports = Job;
