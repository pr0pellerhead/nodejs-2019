var mongoose = require('mongoose');
var config = require('../config/index');

var dbname = config.get('db').dbname;
var host = config.get('db').host;
var port = config.get('db').port;
var username = config.get('db').username;
var password = config.get('db').pass;

var dsn = `mongodb://${host}:${port}/${dbname}`; // data source name

var Init = () => {
    mongoose.connect(dsn, { useNewUrlParser: true }, (err) => {
        if(err) {
            throw new Error('Could not connect to database');
        }
        console.log('Connected to MongoDB');
    });
};

var DB = () => {
    return mongoose;
};

module.exports = {
    Init,
    DB
};