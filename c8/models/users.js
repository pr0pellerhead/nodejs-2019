var mongoose = require('mongoose');

var Users = new mongoose.model(
    'users',
    mongoose.Schema({
        full_name: String,
        email: String,
        password: String
    })
);

var addUser = (data, cb) => {
    var user = new Users(data);
    user.save(err => {
        if(err){
            return cb(err);
        }
        return cb(null);
    });
};

var getUserByEmail = (email, cb) => {
    Users.find({email: email}, (err, data) => {
        if(err){
            return cb(err, null);
        }
        return cb(null, data);
    })
}

module.exports = {
    addUser,
    getUserByEmail
}