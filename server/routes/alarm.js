const express = require('express');
const Alarm = require('../models/alarm');

const router = express.Router();

//알람 시간 조회
 router.get('/check', async (req, res, next) => {
    try {
        const alarm = await Alarm.findAll({
            title: req.body.title,
            time: req.body.time,
            cartridges: req.body.cartridges,
        });
        res.json(users);
        res.status(201).json(alarm);
    } catch(err) {
        console.error(err);
        next(err);
    }
 })

 //알람 시간 등록
 router.post('/create', async (req, res, next) => {        
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
   })
  
  
  //알람 시간 삭제
router.delete('/delete', async (req, res, next) => {
    try {
        const result = await Alarm.destroy({        
            where: { id: req. params.id } });
            res.send("Ok");                    
        } catch (err) {
            console.error(err);
            next(err);
        }
  });

  module.exports = router;
