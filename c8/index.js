const express = require('express');
var bodyParser = require('body-parser');
var expressJWT = require('express-jwt');

var mongo = require('./db/mongo');
var user = require('./handlers/user');

mongo.init();
var api = express();
api.use(bodyParser.json())
api.use(express.static('www'));
api.use(expressJWT({
        secret: 'e982u31=08uyz09823ye-972y13e37fg0837'
    }).unless({
        path: [
            '/api/v1/register',
            '/api/v1/login',
            '/index.html',
            '/'
        ]
    })
);

api.post('/api/v1/register', user.register);
api.post('/api/v1/login', user.login);
api.get('/api/v1/token-test', user.tokenTest);

api.listen('8080', err => {
    if(err){
        throw new Error('Could not start service');
    }
    console.log('Service started on port 8080');
})