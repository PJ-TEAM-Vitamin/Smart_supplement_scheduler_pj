const express = require("express");
const Alarm = require("../models/alarm");
const Intake = require("../models/intake");
const Cartridge = require("../models/cartridge");
const Residue = require("../models/residue");
const spawn = require("child_process").spawn;
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
    const distance = [];
    dischargeCartridges.dataValues.Cartridges.map((v) => {
      // console.log(v.cartridges);
      cartridgesNum.push(v.cartridges);
    });
    console.log("num arr", cartridgesNum);
    // console.log(cartridgesNum); // ex ['1', '2', '3'] : string
    // ++++++++++++++++++++++++++
    // 알약 배출 python code 실행
    // 배출 카트리지 문자열 배열 형태로 제공
    // ++++++++++++++++++++++++++
    for await (let num of cartridgesNum) {
      if (num === "1") {
        const servo_result = spawn("python3", [
          "/home/pgh/Smart_supplement_scheduler_pj/sensor/ultra_1.py",
        ]);
        process.stdin.pipe(servo_result.stdin);
        // const result = spawn('python3',['/home/pgh/Smart_supplement_scheduler_pj/sensor/ultra.py'])
        for await (const data of servo_result.stdout) {
          let value = data.toString();

          distance.push({
            num: parseInt(value),
          });
          console.log("value_loadshell: " + value);
        }
      }
      if (num === "2") {
        const servo_result = spawn("python3", [
          "/home/pgh/Smart_supplement_scheduler_pj/sensor/ultra_2.py",
        ]);
        process.stdin.pipe(servo_result.stdin);
        // const result = spawn('python3',['/home/pgh/Smart_supplement_scheduler_pj/sensor/ultra.py'])
        for await (const data of servo_result.stdout) {
          let value = data.toString();

          distance.push({
            num: parseInt(value),
          });
          console.log("value_loadshell: " + value);
        }
      }

      if (Number(num) === cartridgesNum.length) {
        res.status(201).json(distance);
      }
    }
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
router.post("/intake_or_not", async (req, res, next) => {
  try {
    await Intake.create({
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

module.exports = router;
