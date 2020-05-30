$(document).ready(function () {    
    require('../../src/services/mongo')
    $("#btnSalvar").click(function(){
        var nome = $('#txtNome').val()
        var senha = $('#txtPassword').val()
        var email = $('#txtEmail').val()
        
        const UsuarioModel = require('../../src/models/usuario')

        try {
            const usuario = new UsuarioModel;
            usuario.nome = 'Zildjian';
            usuario.senha = '123';
            usuario.email = 'meow@whiskas.com';
            usuario.save().then(() => console.log('Salvo com sucesso ...'));
        } catch (err) {
            console.log(`Error ${err}`);
        }
    });
});