const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class Auth extends Model {
    otherPublicField;
}

Auth.init(
    {
        login: {
            type: DataTypes.STRING,
            primaryKey: true,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "authenticate",
    }
);

module.exports = Auth;