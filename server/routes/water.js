const express = require("express");
const Water = require("../models/water");

const router = express.Router();

router.get("/weight/tumbler", async (req, res, next) => {
  try {
    // 텀블러 무게 재는 코드 위치
    console.log("start");
    const wait = (timeToDelay) =>
      new Promise((resolve) => setTimeout(resolve, timeToDelay));
    await wait(3000);
    let result = {
      weight: 800,
    };
    console.log("result: ", result);
    res.status(200).json(result);
  } catch (err) {
    console.dir(err);
    next(err);
  }
});

//물 측정량 조회
router.get("/check", async (req, res, next) => {
  try {
    const water = await Water.findAll({
      type: req.body.type,
    });
    res.status(201).json(water);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//물 측정량 등록 post
router.post("/create", async (req, res, next) => {
  try {
    const water = await Water.create({
      type: req.body.type,
    });
    res.status(201).json(water);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
