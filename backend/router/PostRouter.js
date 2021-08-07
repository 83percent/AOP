const express = require('express');
const router = express.Router();
const PostModel = require("../bin/model/PostModel");

router.get("/", async (req, res) => {
    try {
        const _d = await PostModel.find().exec();
        res.send(_d);
    } catch {
        res.sendStatus(500);
    }
});

router.post("/", async(req, res) => {
    if(!req.isAuthenticated()) {
        res.sendStatus(401); // auth
        return;
    }
    try {
        const post = new PostModel(req.body);
        const _d = await post.save();
        if(_d._id) {
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    } catch {
        res.sendStatus(500);
    }
})

router.delete("/:id", async (req, res) => {
    if(!req.isAuthenticated()) {
        res.sendStatus(401); // auth
        return;
    }

    const id = req.params.id;

    if(!id) {
        res.sendStatus(400); // invalid
        return;
    }
    try {
        const _d = await PostModel.findByIdAndDelete(id);
        if(_d.name) {
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    } catch {
        res.sendStatus(500);
    }
})

module.exports = router;