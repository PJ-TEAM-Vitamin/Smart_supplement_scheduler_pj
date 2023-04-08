const express = require('express');
const Water = require('../models/water');

const router = express.Router();


//물 측정량 조회 
router.get('/check', async (req, res, next) => {
    try {
        const water =  await Water.findAll({
            type: req.body.type,
        });
        res.status(201).json(water);
        } catch (err) {
            console.error(err);
            next(err);
        }
});

//물 측정량 등록 post
router.post('/create', async (req, res, next) => {
    try {
        const water = await Water.create({
            type: req.body.type,
        });
        res.status(201).json(water);
    } catch (err) {
        console.error(err);
        next(err);
    }
})


//post 물 등록, 온도는 db 안함, 시퀀스 필요(유지보수 네이밍)

