var movies = require('../models/movies');

var getAllMovies = (req, res) => {
    movies.getAllMovies((err, data) => {
        if(err){
            return res.status(500).send('Internal server error');
        }
        return res.status(200).send(data);
    });
};

var addMovie = (req, res) => {
    movies.addMovie(req.body, (err) => {
        if(err) {
            return res.status(400).send('Bad Request');
        }
        return res.status(201).send('Created');
    });
};

var getSingleMovie = (req, res) => {
    movies.getSingleMovie(req.params.id, (err, data) => {
        if(err) {
            return res.status(500).send('ISE');
        }
        return res.status(200).send(data);
    });
};

var updateMovie = (req, res) => {
    res.send('OK');
};

var patchMovie = (req, res) => {
    res.send('OK');
};

var deleteMovie = (req, res) => {
    res.send('OK');
};

module.exports = {
    getAllMovies,
    addMovie,
    getSingleMovie,
    updateMovie,
    patchMovie,
    deleteMovie
};