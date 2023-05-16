const Sequelize = require("sequelize");

module.exports = class Ingredient extends Sequelize.Model {
  static initiate(sequelize) {
    Ingredient.init(
      {
        ingredient: {
          // 못먹는 성분 이름
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        ingredientSeq: {
          // 성분 코드
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Ingredient",
        tableName: "Ingredients",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Ingredient.hasMany(db.User);
  }
};
