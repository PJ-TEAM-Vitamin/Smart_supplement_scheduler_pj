const Sequelize = require('sequelize');

module.exports = class Cartridge extends Sequelize.Model {
  static initiate(sequelize) {
    Cartridge.init(
      {
        Index: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Cartridge',
        tableName: 'cartridges',
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {
    db.Cartridge.belongsTo(db.User);
  }
};
