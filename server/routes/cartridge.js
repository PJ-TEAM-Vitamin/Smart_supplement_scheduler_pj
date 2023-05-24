const express = require("express");
const Cartridge = require("../models/cartridge");
const Residue = require("../models/residue");
const Ingredient = require("../models/Ingredient");
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
        pillId: pillId,
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

router.get("/pill", async (req, res, next) => {
  try {
    const pill = await Pill.findOne({
      where: {
        id: req.query.id,
        itemName: req.query.name,
      },
    });
    // 임시 _ findAll로 변경 필요
    const ingredient = await Ingredient.findOne({
      where: {
        UserId: "1",
      },
    });
    const intrcItems = pill.dataValues.intrcQesitm; // 상호작용
    const itemName = pill.dataValues.itemName; // 약 이름
    const entpName = pill.dataValues.entpName; // 회사
    const useMethodQesitm = pill.dataValues.useMethodQesitm; // 사용법
    const efcyQesitm = pill.dataValues.efcyQesitm; // 효과

    const ingredientItme = ingredient.dataValues.ingredient;
    let state = null;

    if (intrcItems.search(ingredientItme) !== -1) {
      state = ingredientItme;
    }

    const fullData = {
      itemName,
      entpName,
      useMethodQesitm,
      efcyQesitm,
      state,
    };

    console.log(state);
    console.log(pill);
    console.log(ingredientItme);

    res.status(200).send(fullData);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
