require('./src/services/mongo')
const UsuarioModel = require('./src/models/usuario')

try {
    const usuario = new UsuarioModel;
    usuario.nome = 'Zildjian';
    usuario.senha = '123';
    usuario.email = 'meow@whiskas.com';
    usuario.save().then(() => console.log('Salvo com sucesso ...'));
} catch (err) {
    console.log(`Error ${err}`);
}