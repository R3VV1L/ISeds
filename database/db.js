const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "is_eds",
  "root",
  "",
  {
    host: "localhost",
    dialect: "mysql",
    port: "3306"
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Подключение успех."))
  .catch((err) => console.error("Подключение ошибка: ", err));

module.exports = sequelize;
