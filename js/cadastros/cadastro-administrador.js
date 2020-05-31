$(document).ready(function () {
    $( "#btnSalvar" ).click(function() {
        var params = {
            'nome': $('#txtNome').val(),
            'senha': $('#txtPassword').val(),
            'email': $('#txtEmail').val()
        }; 
        var jqxhr = $.get( "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/squadnove-cqynx/service/api/incoming_webhook/test?", params, function(data, response) {
            
        }).done(function() {
            alert('Salvo com sucesso')
            $('#txtNome').val('')
            $('#txtPassword').val('')
            $('#txtEmail').val('')
        });
    });
});