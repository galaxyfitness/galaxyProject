const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DietasSchema = new Schema({
    nombreDieta: String,
    descripcionDieta: String,
})

var Dieta = mongoose.model('dieta', DietasSchema);


module.exports = Dieta;