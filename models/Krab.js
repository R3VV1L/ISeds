const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class Krab extends Model {
    otherPublicField;
}

Krab.init(
    {
        id_krab: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        id_dok: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_instr: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "krab",
    }
);

module.exports = Krab;
