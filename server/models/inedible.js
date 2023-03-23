const Sequelize = require('sequelize');

module.exports = class Inedible extends Sequelize.Model {
  static initiate(sequelize) {
    Inedible.init(
      {
        name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Inedible',
        tableName: 'inedibles',
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {
    db.Inedible.belongsTo(db.User);
  }
};
