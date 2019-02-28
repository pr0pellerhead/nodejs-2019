var data = require('../data');

var getAllStudents = (req, res) => {
    res.send(data.students);
}

var getStudent = (req, res) => {
    var student = data.students[req.params.id];
    if(student == undefined){
        return res.status(404).send('Not Found');
    }
    return res.send(student);
}

var addStudent = (req, res) => {
    if(req.body.ime != undefined && req.body.prezime != undefined && req.body.prosek != undefined){
        let student = {
            ime: req.body.ime,
            prezime: req.body.prezime,
            prosek: req.body.prosek
        };
        data.students.push(student);
        return res.status(201).send(student);
    }
    return res.status(400).send('Bad Request');
}

var patchStudent = (req, res) => {
    res.send('OK');
}

var updateStudent = (req, res) => {
    res.send('OK');
}

var deleteStudent = (req, res) => {
    res.send('OK');
}


module.exports = {
    getAllStudents,
    getStudent,
    addStudent,
    patchStudent,
    updateStudent,
    deleteStudent
}