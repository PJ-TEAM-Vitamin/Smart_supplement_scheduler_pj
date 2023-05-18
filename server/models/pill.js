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
          allowNull: true,
        },
        entpName: {
          // 업체명
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        efcyQesitm: {
          // 효능
          type: Sequelize.TEXT("long"),
          allowNull: true,
        },
        useMethodQesitm: {
          // 사용법
          type: Sequelize.TEXT("long"),
          allowNull: true,
        },
        atpnWarnQesitm: {
          // 주의사항 경고
          type: Sequelize.TEXT("long"),
          allowNull: true,
        },
        atpnQesitm: {
          // 주의사항
          type: Sequelize.TEXT("long"),
          allowNull: true,
        },
        intrcQesitm: {
          // 상호작용 (약물, 음식)
          type: Sequelize.TEXT("long"),
          allowNull: true,
        },
        seQesitm: {
          // 부작용
          type: Sequelize.TEXT("long"),
          allowNull: true,
        },
        depositMethodQesitm: {
          // 보관법
          type: Sequelize.TEXT("long"),
          allowNull: true,
        },
        updateDe: {
          // API 업데이트 날짜 _ 주기적 업데이트를 위해 사용
          type: Sequelize.STRING(30),
          allowNull: true,
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
  static associate(db) {
    db.Pill.hasMany(db.Cartridge);
    db.Pill.hasMany(db.Residue);
  }
};
