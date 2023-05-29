const express = require("express");
const Water = require("../models/water");
const User = require("../models/user");
const spawn = require("child_process").spawn;

const router = express.Router();
let value = 0;
// 텀블러 무게측정 _ initpage
router.get("/weight/tumbler", async (req, res, next) => {
  try {
    // ++++++++++++
    // tumbler 무게 측정 python code 실행 _ return: 700
    // const weight = await (read python code)
    // const wait = (timeToDelay) =>
    //   new Promise((resolve) => setTimeout(resolve, timeToDelay));
    // await wait(3000);
    // // ++++++++++++
    // let result = {
    //   weight: 800,
    // };
    const tumbler_result = spawn("python3", [
      "/home/pgh/Smart_supplement_scheduler_pj/sensor/hx711py/loadshell.py",
    ]);
    process.stdin.pipe(tumbler_result.stdin);
    for await (const data of tumbler_result.stdout) {
      value = data.toString();
      console.log("value_loadshell: " + value);
    }
    let result = {
      weight: parseInt(value),
    };

    res.status(200).json(result);
  } catch (err) {
    console.dir(err);
    next(err);
  }
});

// 해당 유저의 마신 물의 양 최신 기록 불러오기 // GET: user 분리
router.get("/", async (req, res, next) => {
  try {
    // 오늘 날짜 생성 _ 함수로 정의 예정
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let dateString = year + "-" + month + "-" + day;

    const water = await Water.findOrCreate({
      where: { createdAt: `${dateString}%`, UserId: "1" },
      defaults: {
        amount_of_water: 0,
        tumbler_count: 1,
        UserId: req.body?.userId,
      },
    });

    res.status(200).json(water[0]);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//물 측정량 업데이트
router.patch("/amount", async (req, res, next) => {
  try {
    // 오늘 날짜 생성
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let dateString = year + "-" + month + "-" + day;
    // 오늘 날짜의 마신 물의 양 불러오기 없으면 생성
    console.log("오늘 날짜: ", dateString);
    const tumbler = await Water.findOrCreate({
      where: { createdAt: `${dateString}%`, UserId: "1" },
      defaults: {
        amount_of_water: 0,
        tumbler_count: 1,
        UserId: "1",
      },
    });

    const tumbler_Info = await User.findOne({
      where: {
        id: "1",
      },
    });

    console.log(tumbler_Info.dataValues);

    const tumbler_weight = tumbler_Info.dataValues.tumbler_capacity;
    const tumbler_capacity = tumbler_Info.dataValues.tumbler_capacity;
    const DB_amount = tumbler[0].dataValues.amount_of_water;
    const DB_count = tumbler[0].dataValues.tumbler_count;
    // 최대 잔량 계산
    const max_residual = tumbler_capacity * DB_count - DB_amount;
    console.log("최대 잔량 계산: ", max_residual);
    // ++++++++++++++++++
    // tumbler 무게 측정 python code 실행 _ return: 700
    const currentWeight = 700 - tumbler_weight;
    // ++++++++++++++++++

    let currentAmount;
    let currentCount = DB_count;
    if (currentWeight > max_residual) {
      currentAmount = DB_amount + max_residual + currentWeight;
      currentCount++;
    } else {
      currentAmount = DB_amount + currentWeight;
    }
    console.log(`총량: ${currentAmount}, count: ${currentCount}`);

    // 물의 양 업데이트 및 리턴
    await Water.update(
      {
        amount_of_water: currentAmount,
        tumbler_count: currentCount,
      },
      {
        where: { id: tumbler[0].dataValues.id, UserId: "1" },
      }
    );
    res.status(201).json({
      amount_of_water: currentAmount,
      currentCount,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
