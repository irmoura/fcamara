function validar (){
    var nome = formulario.nome.value;
    var email = formulario.email.value;
    var celular = formulario.celular.value;

    alert(nome)
    alert(email)
    alert(celular)

    if(nome == ""){
        alert("Preencha o campo nome");
        formulario.nome.focus();
        return false;
    }
    
    if(email == ""){
        alert("Preencha o campo email");
        formulario.email.focus();
        return false;
    }

    if(celular == ""){
        alert("Preencha o campo celular");
        formulario.celular.focus();
        return false;
    }
}