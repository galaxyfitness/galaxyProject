const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RutinasSchema = new Schema({
    nombreRutina: String,
    descripcionRutina: String,
})

var Rutina = mongoose.model('rutina', RutinasSchema);


module.exports = Rutina;