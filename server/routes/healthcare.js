const express = require("express");

const User = require("../models/user");
const Alarm = require("../models/alarm");
const Water = require("../models/water");
const Residue = require("../models/residue");
const Intake = require("../models/intake");

const Cartridge = require("../models/cartridge");
const Pill = require("../models/pill");
const Ingredient = require("../models/Ingredient");

const Sequelize = require("sequelize");
const { Op } = require("sequelize");

const router = express.Router();

// 해당 월 서비스 이용 날짜 불러오기
router.get("/month_date", async (req, res, next) => {
  try {
    console.log(req.query.date);
    const currentDate = new Date(req.query.date); // 'YYYY-MM
    console.log(currentDate);
    const date = []; // ['YYYY-MM-DD']

    const water = await Water.findAll({
      where: {
        UserId: req.query.id,
        updatedAt: { [Op.gte]: currentDate },
      },
    });
    console.log(water);
    water?.map((data) => {
      date.push(data?.dataValues?.updatedAt.slice(0, 10));
    });
    console.log(date);
    res.status(200).json(date);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 해당 날짜 헬스정보 불러오기
router.get("/", async (req, res, next) => {
  try {
    const data = {
      alarm: [],
      water: null,
    };

    const userId = req.query.id; // '1'
    const currentDate = new Date(req.query.date); // 'YYYY-MM-DDDD'

    const alarm = await Alarm.findAll({
      where: {
        UserId: userId,
      },
    }).then((alarm) => {
      alarm.map((time) => {
        data.alarm.push({
          title: time?.dataValues?.title,
          AlarmId: time?.dataValues?.id,
        });
      });
    });

    const intake = await Intake.findAll({
      where: {
        createdAt: {
          [Op.gte]: currentDate,
        },
        UserId: userId,
      },
    }).then((intake) => {
      intake.map((v) => {
        data.alarm.map((d) => {
          if (
            d?.AlarmId === v?.AlarmId &&
            v.createdAt.slice(0, 10) === req.query.date
          ) {
            d.type = v.type;
          }
        });
      });
    });

    const water = await Water.findOne({
      where: {
        updatedAt: {
          [Op.gte]: currentDate,
        },
        UserId: userId,
      },
    }).then((water) => {
      data.water = water?.dataValues.amount_of_water;
    });

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
