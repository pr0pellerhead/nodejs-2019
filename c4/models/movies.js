var mongoose = require('mongoose');

var Movies = mongoose.model(
    'movies', 
    mongoose.Schema({
        name: String,
        release_date: Date,
        actors: [String],
        genre: String,
        director: String,
        length: Number
    })
);

var addMovie = (data, cb) => {
    var movie = new Movies(data);
    movie.save((err) => {
        if(err) {
            cb(err);
        }
        cb(null);
    });
}

var getAllMovies = (cb) => {
    Movies.find((err, res) => {
        if(err) {
            cb(err, null);
        }
        cb(null, res);
    });
}

var getSingleMovie = (id, cb) => {
    Movies.findById(id, (err, res) => {
        if(err) {
            cb(err, null);
        }
        cb(null, res);
    });
}

module.exports = {
    addMovie,
    getAllMovies,
    getSingleMovie
}