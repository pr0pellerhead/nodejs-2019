const validatorUser = require('../validators/user');
const validator = require('node-input-validator');
var userModel = require('../models/users');
var bcrypt = require('bcrypt-nodejs');

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

module.exports = {
    register
}