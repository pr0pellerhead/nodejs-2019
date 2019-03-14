const express = require('express');
var bodyParser = require('body-parser');

var mongo = require('./db/mongo');
var user = require('./handlers/user');

mongo.init();
var api = express();
api.use(bodyParser.json())

api.post('/api/v1/register', user.register);

api.listen('8080', err => {
    if(err){
        throw new Error('Could not start service');
    }
    console.log('Service started on port 8080');
})