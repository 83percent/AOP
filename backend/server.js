/*
    Sizelity Shop Admin Program Backend
    - Node.js
    - Auth : Jae Hoon Lee
    - Reg Date : 2021-07-27
    - Last Modify : 2021-07-27
*/
// Middle Ware
const express = require('express');
const cors = require('cors');
const __Mongoose = require('./lib/db/mongo');

const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const server = express();

// Field
const PORT = 3004;

// Router
const LoginRouter = require("./router/LoginRouter");
const AccountRouter = require("./router/AccountRouter");
const QnARouter = require("./router/QnARouter");
const PostRouter = require("./router/PostRouter");
const ExperienceRouter = require("./router/ExperienceRouter")


server.use(express.static('public'));
server.use(cookieParser({secret: 'aop'}));
server.use(cookieSession({
    name: 'admin',
    keys: ['aop']
})); 
server.use(cors({
    //origin: 'https://www.sizelity.com',
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true
}));
server.use(express.json());
server.use(session({
    resave: false,
    saveUninitialized : false,
    cookie: {
        httpOnly: true,
        secure: false
    },
    secret: 'aop'
}));
server.use(passport.initialize());
server.use(passport.session()); 

// Cors Option
server.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true
}));

/* ================================
            Server start
================================ */

server.use("/login", LoginRouter);
server.use("/qna", QnARouter);
server.use("/post", PostRouter);
server.use("/reserve", ExperienceRouter);
server.use("/account", (req, res, next) => {
    if(req.isAuthenticated()) next();
    else res.sendStatus(401);
}, AccountRouter);

server.listen(PORT, () => {
    console.log(" Start Server.js PORT : ",PORT);
});