const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        name: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        age: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        gender: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        tumbler_weight: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Alarm);
    db.User.hasMany(db.Water);
    db.User.hasMany(db.Intake);
    db.User.hasMany(db.Cartridge);
  }
};
