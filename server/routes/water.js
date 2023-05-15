const express = require("express");
const Water = require("../models/water");

const router = express.Router();

router.get("/weight/tumbler", async (req, res, next) => {
  try {
    // ++++++++++++
    // 텀블러 무게 재는 코드 위치
    const wait = (timeToDelay) =>
      new Promise((resolve) => setTimeout(resolve, timeToDelay));
    await wait(3000);
    let result = {
      weight: 800,
    };
    // ++++++++++++

    res.status(200).json(result);
  } catch (err) {
    console.dir(err);
    next(err);
  }
});

//물 측정량 조회
router.patch("/amount", async (req, res, next) => {
  try {
    // 오늘 날짜
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
      },
    });
    console.log(tumbler[0].dataValues.amount_of_water);
    let currentAmount = tumbler[0].dataValues.amount_of_water;
    // 전부 마심 버튼 클릭 시
    if (req.body.drank_all) {
      //amount_of_water + tumbler 최대 양
      currentAmount = currentAmount + 800;
    } else {
      // amount_of_water + 텀블러 무게 측정-텀블러 무게
      const up = 300;
      // +++++++ 텀블러 무게 측정 코드 ++++++++
      currentAmount = currentAmount + up;
    }
    console.log("물의 양: ", currentAmount);
    console.log("::", tumbler[0].dataValues.createdAt);
    // // 물의 양 업데이트 및 리턴
    await Water.update(
      {
        amount_of_water: currentAmount,
      },
      {
        where: { createdAt: tumbler[0].dataValues.createdAt },
      }
    );
    res.status(201).json({
      amount_of_water: currentAmount,
    });
    res.status(201).send("ok");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
