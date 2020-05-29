$(document).ready(function () {
    var jqxhr = $.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/squadnove-cqynx/service/api/incoming_webhook/usuarios-get?secret=", function(data) {
        $(data).each(function (i) {
            
        });
    }).done(function() {

    });
    alert('Hello');
});