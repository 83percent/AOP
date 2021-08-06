const express = require('express');
const router = express.Router();

const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const AdminModel = require("../bin/model/AdminModel");
const bcrypt = require('bcrypt');

const StatusCode = require("../lib/status-code");


router.post('/', passport.authenticate('local'),
    function(req, res) {
        console.log("cll")
        if(req.user) {
            res.send({
                _id: req.user._id
            });
        } else {
            res.sendStatus(StatusCode.noData); // 204
        }
    }
);

passport.use(new LocalStrategy (
    function(username, password, done) {
        AdminModel.findById(username, (err, user) => {
            if(err) return done(err);
            else {
                if(!user) {   
                    return done(null, false, {message: 'Incorrect id'});
                }
                try {
                    const match = password.length > 20 
                        ? password === user.password
                        : bcrypt.compareSync(password, user.password);
                    if(match) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: 'Incorrect password'});
                    }
                } catch(e) {
                    return done(e);
                }
            }
            
        });
    }
));
passport.serializeUser((user, done) => {
    done(null, user._id);
});
passport.deserializeUser((id, done) => {
    AdminModel.findById(id, (err, user) => {
        done(err, user);
    })
});
module.exports = router;