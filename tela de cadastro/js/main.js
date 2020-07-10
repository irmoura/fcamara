function validar() {

    var body = {
        nome : formulario.nome.value,
        email : formulario.email.value,
        senha : formulario.senha.value
    };

    if(body.nome == "" || body.email == "" || body.senha == ""){
        if (body.nome == ""){
            alert("Preencha o campo nome");
            formulario.nome.focus();
        }

        if(body.email == ""){
            alert("Preencha o campo email");
            formulario.email.focus();
        }

        if(body.senha == ""){
            alert("Preencha o campo senha");
            formulario.senha.focus();
        }

        return false;  
    }

    alert("Cadastro realizado com sucesso");

    

}