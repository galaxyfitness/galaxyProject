const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//setting
app.use(bodyParser.json());
app.use(cors());

const { db } = require('./db');

//routes
app.post('/api/users', (req, res) => {
    let data = req.body;
    db.addUser(res, data);
})

app.post('/api/login', (req, res) => {
    let data = req.body;
    db.login(res, data);
})
app.put('/api/users/:id', (req, res) => {
    let { id } = req.params;
    let data = req.body;
    db.updateUser(res, id, data);

})
app.get('/api/users/:id', (req, res) => {
    let { id } = req.params;
    db.getUser(res, id);
 })
    
app.delete('/api/users/:id', (req, res) => {
    let {id} = req.params;
    db.deleteUser(res, id);
})


//rutas de las notas 

app.post('/api/notes/:userId', (req, res) => {
    let data = req.body;
    let { userId } = req.params;
    
    data.id_user = userId;
    db.addNote(res, data);
})

app.get('/api/notes/:userId', (req, res) => {
    let { userId } = req.params;
    db.getNotes(res, userId);
})
app.put('/api/notes/:id', (req, res) => {
    let { id } = req.params;
    let data = req.body;
    db.updateNote(res, id, data);
})

app.delete('/api/notes/:id', (req, res) => {
    let { id } = req.params;
    db.deleteNotes(res, id);
})

//rutas de las notas

app.post('/api/notes/:userId', (req, res) => {
    let data = req.body;
    let { userId } = req.params;
    
    data.id_user = userId;
    db.addNote(res, data);
})

app.get('/api/notes/:userId', (req, res) => {
    let { userId } = req.params;
    db.getNotes(res, userId);
})
app.put('/api/notes/:id', (req, res) => {
    let { id } = req.params;
    let data = req.body;
    db.updateNote(res, id, data);
})

app.delete('/api/notes/:id', (req, res) => {
    let { id } = req.params;
    db.deleteNotes(res, id);
})

//rutas de las dietas

app.post('/api/dietas/:dietaId', (req, res) => {
    let data = req.body;
    let { dietaId } = req.params;
    
    data.id_dieta = dietaId;
    db.addDietas(res, data);
})

app.get('/api/dietas/:dietaId', (req, res) => {
    let { dietaId } = req.params;
    db.getDietas(res, dietaId);
})
app.put('/api/dietas/:id', (req, res) => {
    let { id } = req.params;
    let data = req.body;
    db.updateDietas(res, id, data);
})

app.delete('/api/dietas/:id', (req, res) => {
    let { id } = req.params;
    db.deleteDietas(res, id);
})


//rutas de las rutinas

app.post('/api/rutinas/:rutinaId', (req, res) => {
    let data = req.body;
    let { rutinaId } = req.params;
    
    data.id_dieta = rutinaId;
    db.addRutinas(res, data);
})

app.get('/api/rutinas/:dietaId', (req, res) => {
    let { rutinaId } = req.params;
    db.getRutinas(res, rutinaId);
})
app.put('/api/rutinas/:id', (req, res) => {
    let { id } = req.params;
    let data = req.body;
    db.updateRutinas(res, id, data);
})

app.delete('/api/rutinas/:id', (req, res) => {
    let { id } = req.params;
    db.deleteRutinas(res, id);
})

exports.app = app;