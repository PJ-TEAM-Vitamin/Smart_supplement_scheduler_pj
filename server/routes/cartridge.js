const express = require('express');
const Cartridge  = require('../models/cartridge');

const router = express.Router();

//약 조회 get
router.get('/check', async (req, res, next) => {
    try {
        const cartridge = await Cartridge.findAll({
            index: req.body.index,
            name: req.body.name,
        });
        res.status(201).json(cartridge);
    } catch(err) {
        console.error(err);
        next(err);
    }
 })

//약 정보 등록
router.post('/create', async (req,res, next) => {
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
  })

  
  //약 정보 삭제
router.delete('/delete', async (res, req, next)=> {
    try {
        const result = await Cartridge.destroy({
            where: { id: req. params.id } });
        res.send("Ok");
    }catch (err) {
        console.error(err);
        next(err);
    }
});

  // API 이용하여 주고받기(7개) get post
