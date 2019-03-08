var mongoose = require('mongoose');

var MoviesModel = mongoose.model(
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
    var movie = new MoviesModel(data);
    movie.save((err) => {
        if(err) {
            cb(err);
        }
        cb(null);
    });
}

var getAllMovies = (cb) => {
    MoviesModel.find((err, res) => {
        if(err) {
            cb(err, null);
        }
        cb(null, res);
    });
}

var getSingleMovie = (id, cb) => {
    MoviesModel.findById(id, (err, res) => {
        if(err) {
            cb(err, null);
        }
        cb(null, res);
    });
}

var updateMovie = (id, data, cb) => {
    MoviesModel.updateOne({_id: id}, data, (err) => {
        if(err){
            cb(err);
        }
        cb(null);
    })
}

var deleteMovie = (id, cb) => {
    MoviesModel.deleteOne({_id: id}, (err) => {
        if(err){
            cb(err);
        }
        cb(null);
    });
}

module.exports = {
    addMovie,
    getAllMovies,
    getSingleMovie,
    updateMovie,
    deleteMovie
}