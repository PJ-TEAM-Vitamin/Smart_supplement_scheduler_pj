const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const waterRouter = require("./routes/water");

const { sequelize } = require("./models");
dotenv.config();

// 익스프레스 연동
const app = express();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("mySQL & Database 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/water", waterRouter);

app.use((req, res, next) => {
  const error = new Error(`라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.listen(3066, () => {
  console.log("<smart supplement project> server On");
});
