const validatorUser = require('../validators/user');
const validator = require('node-input-validator');
var userModel = require('../models/users');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var register = (req, res) => {
    var v = new validator(req.body, validatorUser.register);
    v.check().then(matched => {
        if(matched){
            userModel.getUserByEmail(req.body.email, (err, data) => {
                if(err){
                    return res.status(500).send('Internal Server Error');
                } else {
                    if(data.length > 0){
                        return res.status(400).send('User already exists');
                    } else {
                        bcrypt.hash(req.body.password, null, null, function(err, hash) {
                            // Store hash in your password DB.
                            // ************
                            req.body.password = hash;
                            userModel.addUser(req.body, err => {
                                if(err){
                                    return res.status(500).send('Internal Server Error')
                                }
                                return res.status(201).send('OK');
                            });
                            // ************
                        });
                    }
                }
            })
        } else {
            return res.status(400).send(v.errors);
        }
    });
}

var login = (req, res) => {
    var v = new validator(req.body, validatorUser.login);
    v.check().then(match => {
        if(match){
            userModel.getUserByEmail(req.body.email, (err, data) => {
                if(err){
                    return res.status(500).send('ISE');
                }
                if(data.length == 0){
                    return res.status(402).send('Access denied');
                }
                bcrypt.compare(req.body.password, data[0].password, (err, m) => {
                    if(err){
                        return res.status(500).send('ISE');
                    }
                    if(!m){
                        return res.status(402).send('Access denied');
                    }
                    // 
                    var token = jwt.sign({
                        uid: data[0]._id,
                        email: data[0].email,
                        full_name: data[0].full_name
                    }, 'e982u31=08uyz09823ye-972y13e37fg0837')
                    return res.status(200).send(token);
                });
            });
        } else {
            return res.status(400).send('Bad Request');
        }
    });
}

var tokenTest = (req, res) => {
    res.status(200).send(req.user);
}

module.exports = {
    register,
    login,
    tokenTest
}