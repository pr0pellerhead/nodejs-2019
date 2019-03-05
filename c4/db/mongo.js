var mongoose = require('mongoose');

const dbname = "movies";
const host = "127.0.0.1";
const port = "27017";
const username = "";
const password = "";

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