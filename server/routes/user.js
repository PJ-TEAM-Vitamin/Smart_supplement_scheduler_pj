const express = require("express");
const User = require("../models/user");

const router = express.Router();

//회원 등록
router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      tumbler_weight: req.body.tumbler_weight,
    });
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//회원 조회, get
router.get("/check", async (req, res, next) => {
  try {
    const alarm = await User.findAll({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      tumbler_weight: req.body.tumbler_weight,
    });
    res.json(user);
    res.status(201).json(alarm);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//회원 정보 수정
router.patch("/change", async (req, res, next) => {
  try {
    const user = await User.update(
      {
        //findAll
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        tumbler_weight: req.body.tumbler_weight,
      },
      {
        where: { id: req.params.id }, //id에 1, 다른거 들어왔을때 에러처리
      }
    );
    res.json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
