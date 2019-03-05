const express = require('express');

var db = require('./db/mongo');
var movies = require('./handlers/movies');

db.Init();
var api = express();

api.get('/api/v1/movies', movies.getAllMovies);
api.post('/api/v1/movies', movies.addMovie);
api.get('/api/v1/movies/:id', movies.getSingleMovie);
api.put('/api/v1/movies/:id', movies.updateMovie);
api.patch('/api/v1/movies/:id', movies.patchMovie);
api.delete('/api/v1/movies/:id', movies.deleteMovie);

api.listen(8080, '0.0.0.0', () => {
    console.log('Your API has started on port 8080');
});
