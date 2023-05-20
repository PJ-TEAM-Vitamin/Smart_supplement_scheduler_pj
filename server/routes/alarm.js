const express = require("express");
const Alarm = require("../models/alarm");
const Intake = require("../models/intake");
const Cartridge = require("../models/cartridge");
const Residue = require("../models/residue");
const router = express.Router();

// 알약 배출
router.post("/discharge", async (req, res, next) => {
  try {
    // req.body : {
    //     "alarmId" : 1,
    //     "userId": 1
    // }
    const dischargeCartridges = await Alarm.findOne({
      where: {
        id: req.body.alarmId,
        UserId: req.body.userId,
      },
      include: [
        {
          model: Cartridge,
          attributes: ["cartridges"],
        },
      ],
    });
    console.log();
    console.dir(dischargeCartridges.dataValues.Cartridges.length);
    const cartridgesNum = [];
    // dischargeCartridges.map((v) => {
    //   console.log(v.cartridges);
    //   cartridgesNum.push(v.cartridges);
    // });
    // console.log(cartridgesNum); // ex ['1', '2', '3'] : string
    // ++++++++++++++++++++++++++
    // 알약 배출 python code 실행
    // 배출 카트리지 문자열 배열 형태로 제공
    // ++++++++++++++++++++++++++

    res.status(201).send("ok");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 알약 섭취 (섭취 true, 미섭취: false)
router.post("/intakeOrNot", async (req, res, next) => {
  try {
    await Intake.post({
      type: req.body.type,
      AlarmId: req.body.alarmId,
      UserId: req.body.userId,
    });
    res.status(201).send("ok");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//알람 시간 조회
router.get("/check", async (req, res, next) => {
  try {
    const alarm = await Alarm.findAll({
      title: req.body.title,
      time: req.body.time,
      cartridges: req.body.cartridges,
    });
    res.json(users);
    res.status(201).json(alarm);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//알람 시간 등록
router.post("/create", async (req, res, next) => {
  try {
    const alarm = await Alarm.create({
      title: req.body.title,
      time: req.body.time,
      cartridges: req.body.cartridges,
    });
    //console.log(alarm); 확인용
    res.status(201).json(alarm);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//알람 시간 삭제
router.delete("/delete", async (req, res, next) => {
  try {
    const result = await Alarm.destroy({
      where: { id: req.params.id },
    });
    res.send("Ok");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
