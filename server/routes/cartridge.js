const express = require("express");
const Cartridge = require("../models/cartridge");
const Residue = require("../models/residue");
const Alarm = require("../models/alarm");
const Pill = require("../models/pill");

const router = express.Router();

// 카트리지 잔량 불러오기
router.get("/", async (req, res, next) => {
  try {
    const fullData = [];
    const cartridge = await Residue.findAll({
      where: { UserId: "1" },
    });

    cartridge?.map(async (v, i) => {
      const pillId = v.dataValues.PillId;
      const pill = await Pill.findOne({
        where: { id: pillId },
        attributes: ["itemName"],
      });

      const mergeData = {
        id: v.dataValues?.id,
        cartridge: v.dataValues?.cartridges,
        remaining_pill: v.dataValues?.remaining_pill,
        pill: pill.dataValues?.itemName,
      };

      // console.log(mergeData);
      fullData.push({ ...mergeData });
      console.dir(fullData);
      console.log(i + 1, cartridge.length);
      if (i + 1 === cartridge.length) {
        fullData.sort(function (a, b) {
          return Number(a.cartridge) - Number(b.cartridge);
        });
        res.status(200).json(fullData);
      }
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//약 조회 get
router.get("/check", async (req, res, next) => {
  try {
    const cartridge = await Cartridge.findAll({
      index: req.body.index,
      name: req.body.name,
    });
    res.status(201).json(cartridge);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//약 정보 등록
router.post("/create", async (req, res, next) => {
  try {
    const cartridge = await Cartridge.create({
      index: req.body.index,
      name: req.body.name,
    });
    //console.log(cartridge);
    res.status(201).json(cartridge);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//약 정보 삭제
router.delete("/delete", async (res, req, next) => {
  try {
    const result = await Cartridge.destroy({
      where: { id: req.params.id },
    });
    res.send("Ok");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// API 이용하여 주고받기(7개) get post
module.exports = router;
