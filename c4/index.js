const express = require('express');
const bodyParser = require('body-parser');

var config = require('./config/index');
var db = require('./db/mongo');
var movies = require('./handlers/movies_handler');

db.Init();
var api = express();
api.use(bodyParser.json());

api.get('/api/v1/movies', movies.getAllMovies);
api.post('/api/v1/movies', movies.addMovie);
api.get('/api/v1/movies/:id', movies.getSingleMovie);
api.put('/api/v1/movies/:id', movies.updateMovie);
api.patch('/api/v1/movies/:id', movies.patchMovie);
api.delete('/api/v1/movies/:id', movies.deleteMovie);

api.listen(8080, '0.0.0.0', () => {
    console.log('Your API has started on port 8080');
});
