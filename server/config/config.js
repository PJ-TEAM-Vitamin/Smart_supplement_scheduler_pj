require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "smart-supplement-pj",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "Asia/Seoul",
    dialectOptions: {
      charset: "utf8mb4",
      dateStrings: true,
      typeCast: true,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "smart-supplement-pj",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "Asia/Seoul",
    dialectOptions: {
      charset: "utf8mb4",
      dateStrings: true,
      typeCast: true,
    },
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "smart-supplement-pj",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "Asia/Seoul",
    dialectOptions: {
      charset: "utf8mb4",
      dateStrings: true,
      typeCast: true,
    },
  },
};
