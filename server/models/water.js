const Sequelize = require("sequelize");

module.exports = class Water extends Sequelize.Model {
  static initiate(sequelize) {
    Water.init(
      {
        amount_of_water: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Water",
        tableName: "waters",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Water.belongsTo(db.User);
  }
};
