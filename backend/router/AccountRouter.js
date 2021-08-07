const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const saltRounds = 10;
const AdminModel = require("../bin/model/AdminModel");



router.post("/", async (req, res) => {
    const { now, password } = req.body;
    let pass = false;
    console.log("변경 시도 : ", req.user)
    switch(req.user.state) {
        case 0 : {
            pass = (now === req.user.password);
            break;
        }
        case 1 : {
            pass = (bcrypt.compareSync(now, req.user.password));
            console.log(pass);
            break;
        }
        default : {
            res.sendStatus(500);
            return;
        }
    }
    if(!pass) {
        res.sendStatus(401);
        return;
    } else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        req.user.password = hash;
        req.user.state = 1;
        await req.user.save();
        res.sendStatus(200);
        
    }
});

module.exports = router;