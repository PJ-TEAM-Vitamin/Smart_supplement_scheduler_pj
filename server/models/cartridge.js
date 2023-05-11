const Sequelize = require("sequelize");

module.exports = class Cartridge extends Sequelize.Model {
  static initiate(sequelize) {
    Cartridge.init(
      {
        cartridges: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Cartridge",
        tableName: "cartridges",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Cartridge.belongsTo(db.Alarm);
  }
};
