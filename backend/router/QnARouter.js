const express = require('express');
const router = express.Router();
const QnAModel = require("../bin/model/QnAModel");

router.get("/:count", async (req, res) => {
    let { count } = req.params;
    if(count === undefined) count = 0;
    const result = await QnAModel.find().sort({reg_date : -1}).limit(15).skip(Number(count));
    res.send(result);
});

router.get("/search/name/:name", async (req,res) => {
    const value = req.params.name;
    const result = await QnAModel.find({name: value}).sort({reg_date: -1});
    res.send(result);
})

router.get("/search/id/:id", async (req,res) => {
    const result = await QnAModel.findById(req.params.id);
    console.log(result);
    res.send(result);
});

router.post("/", async (req, res) => {
    const {title, content, name, password} = req.body;
    if(!title || title.length < 2 || title.length > 30) {
        res.sendStatus(400); // Bad Request = invalid
        return;
    }
    if(!content || content.length < 10 || content.length > 300) {
        res.sendStatus(400);
        return;
    }
    if(!name || name.length < 2 || name.length > 10) {
        res.sendStatus(400);
        return;
    }
    try  {
        let _q = new QnAModel(password ? {title, name, content, password} : {title, name, content});
        const result = await _q.save();
        console.log(result);
        res.sendStatus(200);
    } catch(err) {
        res.sendStatus(500);
    }
});


// 답변 등록
router.patch("/", async (req, res) => {
    if(!req.isAuthenticated()) {
        res.sendStatus(401);  // auth
        return;
    }
    const { id, answer } = req.body;
    if(!id || !answer ) {
        res.sendStatus(400);  // invalid
        return; 
    }
    try {
        const qna = await QnAModel.findById(id);
        qna.answer = answer;
        await qna.save();
        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
});
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    if(!id) {
        res.sendStatus(400);  // invalid
        return;
    }
    try {
        const qna = await QnAModel.findByIdAndDelete(id);
        if(qna.name) res.sendStatus(200);
        else res.sendStatus(500);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;