const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: false
    },
    senha: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);