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
    if(data.students[req.params.id] != undefined){
        if(req.body.ime != undefined){
            data.students[req.params.id].ime = req.body.ime;
        }
        if(req.body.prezime != undefined){
            data.students[req.params.id].prezime = req.body.prezime;
        }
        if(req.body.prosek != undefined){
            data.students[req.params.id].prosek = req.body.prosek;
        }
        return res.status(200).send("OK");
    } else {
        return res.status(404).send("Not Found");
    }
}

var updateStudent = (req, res) => {
    if(data.students[req.params.id] != undefined){
        if(req.body.ime != undefined && req.body.prezime != undefined && req.body.prosek != undefined){
            let student = {
                ime: req.body.ime,
                prezime: req.body.prezime,
                prosek: req.body.prosek
            };
            data.students[req.params.id] = student;
            return res.status(200).send("OK");
        } else {
            return res.status(400).send("Bad Request");
        }
    } else {
        return res.status(404).send("Not Found");
    }
}

var deleteStudent = (req, res) => {
    if(data.students[req.params.id] != undefined){
        data.students.splice(req.params.id, 1);
        return res.status(204).send("No Content");
    } else {
        return res.status(404).send("Not Found");
    }
}


module.exports = {
    getAllStudents,
    getStudent,
    addStudent,
    patchStudent,
    updateStudent,
    deleteStudent
}