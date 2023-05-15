const express = require("express");
const Water = require("../models/water");
const User = require("../models/user");

const router = express.Router();

router.get("/weight/tumbler", async (req, res, next) => {
  try {
    // ++++++++++++
    // tumbler 무게 측정 python code 실행 _ return: 700
    // const weight = await (read python code)
    const wait = (timeToDelay) =>
      new Promise((resolve) => setTimeout(resolve, timeToDelay));
    await wait(3000);
    // ++++++++++++
    let result = {
      weight: 800,
    };

    res.status(200).json(result);
  } catch (err) {
    console.dir(err);
    next(err);
  }
});

//물 측정량 조회
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
      where: { createdAt: `${dateString}%` },
      defaults: {
        amount_of_water: 0,
        tumbler_count: 1,
      },
    });

    const tumbler_Info = await User.findOne({
      where: {
        id: req.body.id,
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
        where: { id: tumbler[0].dataValues.id },
      }
    );
    res.status(201).json({
      amount_of_water: currentAmount,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
