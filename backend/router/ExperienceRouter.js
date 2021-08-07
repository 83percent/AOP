const express = require("express");
const router = express.Router();
const ExperienceModel = require("../bin/model/ExperienceModel");

router.get("/:count", async (req, res) => {
    if(!req.isAuthenticated()) {
        res.sendStatus(401); // auth
        return;
    }
    const count = req.params.count;
    if(count === undefined || count === null) {
        res.sendStatus(400); // invalid
        return;
    }
    
    try {
        const data = await ExperienceModel.find().sort({reg_date: -1}).limit(30).skip(Number(count));
        res.send(data);
    } catch {
        res.sendStatus(500);
    }
});

router.post("/", async (req, res) => {
    try {
        const data = new ExperienceModel(req.body);
        const result = await data.save();
        if(result._id) res.sendStatus(200);
        else res.sendStatus(500);
    } catch(err) {
        console.log(err);
        if(err.code === 11000) res.sendStatus(419); // already
        else res.sendStatus(500)
    }
});

router.delete("/:id", async (req, res) => {
    if(!req.isAuthenticated()) {
        res.sendStatus(401); // auth
        return;
    }
    try {
        const id = req.params.id;
        if(!id) {
            res.sendStatus(400); // invalid
            return;
        }
        const result = await ExperienceModel.findByIdAndDelete(id);
        if(result.name) {
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    } catch {
        res.sendStatus(500);
    }
});

router.patch("/:id", async (req, res) => {
    if(!req.isAuthenticated()) {
        res.sendStatus(401); // auth
        return;
    }
    try {
        const id = req.params.id;
        if(!id) {
            res.sendStatus(400); // invalid
            return;
        }
        const result = await ExperienceModel.findById(id);
        result.check = !(result.check);
        await result.save();
        res.sendStatus(200);
    } catch(err) {
        res.sendStatus(500);
    }
})

module.exports = router;