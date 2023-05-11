const Sequelize = require("sequelize");

module.exports = class Pill extends Sequelize.Model {
  static initiate(sequelize) {
    Pill.init(
      {
        itemName: {
          type: Sequelize.STRING(100),
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
        efcyQesitm: {
          // 효능
          type: Sequelize.TEXT("long"),
          allowNull: false,
        },
        useMethodQesitm: {
          // 사용법
          type: Sequelize.TEXT("long"),
          allowNull: false,
        },
        atpnWarnQesitm: {
          // 주의사항 경고
          type: Sequelize.TEXT("long"),
          allowNull: false,
        },
        atpnQesitm: {
          // 주의사항
          type: Sequelize.TEXT("long"),
          allowNull: false,
        },
        intrcQesitm: {
          // 상호작용 (약물, 음식)
          type: Sequelize.TEXT("long"),
          allowNull: false,
        },
        seQesitm: {
          // 부작용
          type: Sequelize.TEXT("long"),
          allowNull: false,
        },
        depositMethodQesitm: {
          // 보관법
          type: Sequelize.TEXT("long"),
          allowNull: false,
        },
        updateDe: {
          // API 업데이트 날짜 _ 주기적 업데이트를 위해 사용
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Pill",
        tableName: "pills",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {}
};
