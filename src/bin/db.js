const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/app-notas';

//Models
const User = require('./models/User');
const Note = require('./models/Notes');

class controller {
    constructor() {
        this.connect();
    
    }
    async connect() {
        try {
            await mongoose.connect(MONGO_URI, {
                useNewUrlParser : true
            })
            console.info('Conectado a la base de Datos');
        } catch (err) {
            console.error(err);
        }
    }
    //consultas 
    addUser(res, data) {
        User.create(data, (err, newUser) => {
            if (err) throw err;
            res.json({
                status: 200,
                message: 'created',
                user: newUser
            })
        })
    }
    login(res, data) {
        User.findOne({
            $and: [
                { email: data.email },
                { password: data.password}
            ]
         
        }, (err, user) => {
            if (err) throw err;
            res.json({
                status: 200,
                message: 'ok',
                user
            })
        })
    }

    updateUser(res, id, data) {
        User.updateOne({
            _id: id
        }, data, (err, updateUser) => {
            if (err) throw err;
            res.json({
                status: 200,
                message: 'updated',
                user: updateUser
            })
            
        })
    }
    getUser(res, id) {
        User.findOne({
            _id: id
        },  (err, user) => {
            if (err) throw err;
            res.json({
                status: 200,
                message: 'ok',
                user
                
            })
            
        })
    }
    deleteUser(res, id) {
        User.deleteOne({
            _id: id
        }, (err) => {
            if (err) throw err;
            res.json({
                status: 200,
                message:'Deleted'
            })
        })
    };
// consulta  de notas 
    addNote(res, data) {
        Note.create(data, (err, note) => {
            if (err) throw err;
            res.json({
                status: 200,
                message: 'tarea creada',
                note
            })
        })
    }
    getNotes(res, userId) {
        Note.find({
            id_user: userId
        }, (err, notes) => {
            if (err) throw err;
            res.json({
                status: 200,
                message: 'ok',
                notes
            })
        })
    };
    updateNote(res, id, data) {
        Note.updateOne({
            _id: id
        }, data, (err, updateNote) => {
            if (err) throw err;
            res.json({
                status: 200,
                message: 'Actualizada',
                note: updateNote

            })
        })
    };

    deleteNotes(res, id) {
        Note.deleteOne({
            _id: id
        }, (err,) => {
            if (err) throw err;
            res.json({
                status: 200,
                message: 'Borrado'
                
            })
        })
    };

}
exports.db = new controller();