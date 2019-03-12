const valide = require('node-input-validator');
var moviesModel = require('../models/movies_model');
var moviesValidator = require('../validators/movies_validator');

var getAllMovies = (req, res) => {
    moviesModel.getAllMovies((err, data) => {
        if(err){
            return res.status(500).send('Internal server error');
        }
        return res.status(200).send(data);
    });
};

var addMovie = (req, res) => {
    let v = new valide(req.body, moviesValidator.schema);
    v.check().then(matched => {
        if(matched){
            moviesModel.addMovie(req.body, (err) => {
                if(err) {
                    return res.status(400).send('Bad Request');
                }
                return res.status(201).send('Created');
            });
        } else {
            return res.status(400).send(v.errors); 
        }
    });
};

var getSingleMovie = (req, res) => {
    moviesModel.getSingleMovie(req.params.id, (err, data) => {
        if(err) {
            return res.status(500).send('ISE');
        }
        return res.status(200).send(data);
    });
};

var updateMovie = (req, res) => {
    moviesModel.updateMovie(req.params.id, req.body, (err) => {
        if(err) {
            return res.status(500).send('ISE');
        }
        return res.status(200).send('OK');
    });
};

var patchMovie = (req, res) => {
    moviesModel.updateMovie(req.params.id, req.body, (err) => {
        if(err) {
            return res.status(500).send('ISE');
        }
        return res.status(200).send('OK');
    });
};

var deleteMovie = (req, res) => {
    moviesModel.deleteMovie(req.params.id, (err) => {
        if(err) {
            return res.status(500).send('ISE');
        }
        return res.status(200).send('OK');
    });
};

module.exports = {
    getAllMovies,
    addMovie,
    getSingleMovie,
    updateMovie,
    patchMovie,
    deleteMovie
};