const express = require("express");
const Cartridge = require("../models/cartridge");
const Residue = require("../models/residue");

const router = express.Router();

// 카트리지 잔량 불러오기
router.get("/", async (req, res, next) => {
  try {
    const cartridge = await Residue.findAll({
      where: { UserId: "1" },
    });
    res.status(200).json(cartridge);
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
