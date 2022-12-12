const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class NeedSotrs extends Model {
    otherPublicField;
}

NeedSotrs.init(
    {
        counterElectr: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        sequelize,
        modelName: "needsotrs",
        timestamps: false
    }
);

module.exports = NeedSotrs;