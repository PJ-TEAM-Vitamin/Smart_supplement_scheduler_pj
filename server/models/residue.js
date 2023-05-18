const Sequelize = require("sequelize");

module.exports = class Residue extends Sequelize.Model {
  static initiate(sequelize) {
    Residue.init(
      {
        cartridges: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        remaining_pill: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Residue",
        tableName: "residues",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Residue.belongsTo(db.User);
    db.Residue.hasMany(db.Pill);
  }
};
