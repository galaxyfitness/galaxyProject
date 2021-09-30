const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    nombresApellidos: String,
    identificacion:{
        tipoIdentificacion: String,
        numeroIdentificacion: String
    },
    direccion: String,
    telefono: String,
    telefonoContacto: String,
    genero: String,
    FechaNacimiento:Date,
    rol: {type: Integer, default: 2},  //1 Administrador, 2 Usuario, 3 Empleado
    activo: {type: Boolean, default: true},    
    fechaRegistro:{type: Date, default: Date.now},
    dietas:{
        idDieta: String,
        nombreDieta: String,
        descripcionDieta: String
    },
    rutinas:{
        idRutina: String,
        nombreRutina: String,
        descripcionRutina: String       
    },
    antropometricos:{    
        peso: String,
        talla: String,
        imc: String,
        primetroCintura: String
    }
  


})

var User = mongoose.model('user', UserSchema);


module.exports = User;

/*
String : Permiten almacenar cadenas de caracteres en formato UTF-8
Integer32 : Valores entero numérico
Integer64 : Valores entero numérico
Double : Almacena valores de punto flotante
Object : Almacena un documento embebido
Array : Permite almacenar un arreglo con elementos de distinto tipo
Boolean : Permite almacenar un valor true o false
*/ 