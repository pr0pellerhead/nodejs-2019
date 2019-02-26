// api libraries
const express = require('express');

// api handlers
var students = require('./handlers/students');

// api init and config
var api = express();

// routes
api.get("/api/v1/students", students.getAllStudents);

// start the API
api.listen(8000);