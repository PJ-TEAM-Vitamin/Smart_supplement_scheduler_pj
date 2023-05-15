const express = require("express");

const User = require("../models/user");
const Alarm = require("../models/alarm");
const Cartridge = require("../models/cartridge");
const Pill = require("../models/pill");
const Intake = require("../models/intake");

const router = express.Router();

//회원 등록
router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create({
      // User: 사용자 기본 정보 저장
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      tumbler_weight: req.body.tumbler,
      tumbler_capacity: req.body.capacity,
    });
    if (req.body.time) {
      // time 배열 순회하며 저장
      req.body.time.map(async (al) => {
        const alarm = await Alarm.create({
          title: al.title,
          time: al.time,
        });
        const id = alarm.dataValues.id;
        if (al.cartridge) {
          al.cartridge.map(async (ca) => {
            console.log(id);
            const alCartridge = await Cartridge.create({
              AlarmId: id,
              cartridges: ca,
            });
          });
        }
      });
    }
    res.send("ok");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
