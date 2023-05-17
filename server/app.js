const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const waterRouter = require("./routes/water");
const userRouter = require("./routes/user");
const alarmRouter = require("./routes/alarm");

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
app.use("/user", userRouter);
app.use("/alarm", alarmRouter);

app.use((req, res, next) => {
  const error = new Error(`라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.listen(3066, () => {
  console.log("<smart supplement project> server On");
});

// 온습도 측정 및 동작
setInterval(async () => {
  console.log("온습도를 측정 합니다.");
  let temp;
  // 온습도 측정 temperature and humidity
  temp = {
    temperature: 20,
    humidity: 10,
  };
  console.log(`온도: ${temp.temperature}, 습도 ${temp.humidity}`);
  if (temp.temperature >= 40 || temp.humidity >= 20) {
    console.log("쿨러 On");
  } else {
    console.log("쿨러 Off");
  }
}, 5000);
