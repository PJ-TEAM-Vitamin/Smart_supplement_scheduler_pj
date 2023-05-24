const express = require("express");

const User = require("../models/user");
const Alarm = require("../models/alarm");
const Water = require("../models/water");
const Residue = require("../models/residue");

const Cartridge = require("../models/cartridge");
const Pill = require("../models/pill");
const Ingredient = require("../models/Ingredient");

const Sequelize = require("sequelize");

const router = express.Router();

// Landing 진입시 정보 불러오기
// 사용자 정보, 알람 정보, 마신 물의양, 알약 잔량
router.get("/", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: "1",
      },
      include: [
        {
          model: Alarm,
          attributes: ["id", "title", "time"],
        },
      ],
    });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//회원 등록
router.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.create({
      // User: 사용자 기본 정보 저장
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      tumbler_weight: req.body.tumbler,
      tumbler_capacity: req.body.capacity,
    });
    console.log(user.dataValues.id);

    const cartridgePillsNum = [];
    if (req.body.able) {
      req.body.able.map(async (pill, i) => {
        const PInfo = await Pill.create({
          itemName: pill?.itemName,
          itemSeq: pill?.itemSeq,
          entpName: pill?.entpName,
          efcyQesitm: pill?.efcyQesitm,
          useMethodQesitm: pill?.useMethodQesitm,
          atpnWarnQesitm: pill?.atpnWarnQesitm,
          atpnQesitm: pill?.atpnQesitm,
          intrcQesitm: pill?.intrcQesitm,
          seQesitm: pill?.seQesitm,
          depositMethodQesitm: pill?.depositMethodQesitm,
          updateDe: pill?.updateDe,
        });
        cartridgePillsNum.push(PInfo.dataValues.id);
        // 잔량표시를 위한
        await Residue.create({
          cartridges: i + 1,
          remaining_pill: 0,
          PillId: PInfo.dataValues.id,
          UserId: user.dataValues.id,
        });
        // Pill residue 업데이트 필요
      });
    }
    if (req.body.unable) {
      req.body.unable.map(async (ing) => {
        await Ingredient.create({
          ingredient: ing,
          ingredientSeq: ing?.ingredientSeq,
          UserId: user.dataValues.id,
        });
      });
    }
    if (req.body.time) {
      // time 배열 순회하며 저장
      req.body.time.map(async (al) => {
        const alarm = await Alarm.create({
          title: al?.title,
          time: al?.time,
          UserId: user.dataValues.id,
        });
        const id = alarm.dataValues.id;

        if (al.cartridge) {
          al.cartridge.map(async (ca, i) => {
            console.log(id);
            const alCartridge = await Cartridge.create({
              AlarmId: id,
              cartridges: ca,
              UserId: user.dataValues.id,
              PillId: cartridgePillsNum[i],
            });
          });
        }
      });
    }
    res.status(201).send("ok");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
