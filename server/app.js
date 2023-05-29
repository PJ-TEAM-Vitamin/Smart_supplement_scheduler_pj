const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const waterRouter = require("./routes/water");
const userRouter = require("./routes/user");
const alarmRouter = require("./routes/alarm");
const cartridgeRouter = require("./routes/cartridge");
const healthcareRouter = require("./routes/healthcare");
const spawn = require("child_process").spawn;
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
app.use("/cartridge", cartridgeRouter);
app.use("/healthcare", healthcareRouter);

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
  let dht11_value;
  // 온습도 측정 temperature and humidity

  const dht11_result = spawn("python3", [
    "/home/pgh/Smart_supplement_scheduler_pj/sensor/dht11_relay.py",
  ]); // 온습도 센서
  process.stdin.pipe(dht11_result.stdin);
  for await (const data of dht11_result.stdout) {
    dht11_value = data.toString();
    console.log("dht11_value: " + dht11_value);
  }
  temp = {
    temperature: parseInt(dht11_value),
  };
  console.log(`온도: ${temp.temperature}`);
  if (temp.temperature >= 20) {
    console.log("쿨러 On");
  } else {
    console.log("쿨러 Off");
  }
}, 50000);
