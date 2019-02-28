// api libraries
const express = require('express');
var bodyParser = require('body-parser');

// api handlers
var students = require('./handlers/students');

// api init and config
var api = express();
api.use(bodyParser.json());

// routes
api.get("/api/v1/students", students.getAllStudents);
api.get("/api/v1/students/:id", students.getStudent);
api.post("/api/v1/students", students.addStudent);
api.patch("/api/v1/students/:id", students.patchStudent);
api.put("/api/v1/students/:id", students.updateStudent);
api.delete("/api/v1/students/:id", students.deleteStudent);

// start the API
api.listen(8000);