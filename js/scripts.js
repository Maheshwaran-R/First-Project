const { ready } = require("jquery")
$(document).ready(function() {
    $('[data-toggle = "tooltip"]').tooltip();
});

$(document).ready(function() {
    $("#loginButton").click(function() {
        $("#loginModal").modal('toggle');
    });
});

                
$(document).ready(function() {
    $("#signinButton").click(function() {
        $("#signinModal").modal('toggle');
    });
});


