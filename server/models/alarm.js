const Sequelize = require("sequelize");

module.exports = class Alarm extends Sequelize.Model {
  static initiate(sequelize) {
    Alarm.init(
      {
        title: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        time: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        cartridges: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Alarm",
        tableName: "alarms",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Alarm.belongsTo(db.User);
    db.Alarm.hasMany(db.Cartridge);
  }
};
