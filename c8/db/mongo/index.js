var mongoose = require('mongoose');

var init = () => {
    var host = '127.0.0.1';
    var port = '27017';
    var dbname = 'movies';
    var cs = `mongodb://${host}:${port}/${dbname}`
    mongoose.connect(cs, { useNewUrlParser: true }, err => {
        if(err){
            throw new Error('Could not connect to database');
        }
        console.log('Connected to MongoDB');
    })
}

module.exports = {
    init
}