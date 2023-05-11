const Sequelize = require("sequelize");

module.exports = class Intake extends Sequelize.Model {
  static initiate(sequelize) {
    Intake.init(
      {
        name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        itemSeq: {
          // 품목기준 코드
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        entpName: {
          // 업체명
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        type: {
          // true: 섭취중, false: 섭취 불가
          type: Sequelize.BOOLEAN(),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Intake",
        tableName: "intakes",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Intake.belongsTo(db.User);
  }
};
