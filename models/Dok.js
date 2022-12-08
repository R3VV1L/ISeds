const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class Dok extends Model {
    otherPublicField;
}

Dok.init(
    {
        id_dok: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        n_dok: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        data_of: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "dok",
    }
);

module.exports = Dok;
