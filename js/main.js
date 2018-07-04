document.addEventListener("DOMContentLoaded", function() {
    const curvePaths = ['M0,199V33S190,153.92,499.5,153.92C990.58,153.92,1065,0,1427.25,0,1712.37,0,1887,61.28,1920,79.14V196Z',
        'M0,19.8S278,204,552,204C1070,204,1064,.41,1478.38 .41,1780,0.41,1920,124,1920,124V285H1V19.8Z',
        'M0,48.38S291.69,211.11,565,211.11C945,211.11,1099,.5,1487,0.5,1779.39,0.5,1920,107,1920,107V352H0V48.38Z'
    ];

    function curveAnimation(selector, path, delay = 0) {
        let myAnimation = anime({
            targets: selector,
            d: path,
            delay: delay,
            elasticity: 200,
            duration: 1000,
        });
    }

    curveAnimation('#curve0', curvePaths[0]);
    curveAnimation('#curve1', curvePaths[1], 50);
    curveAnimation('#curve2', curvePaths[2], 100);
});

$(function() {

    $('#fuser_error_message').hide();
    $('#fpassword_error_message').hide();

    var error_user = false;
    var error_pass = false;

    //Eventos
    $('#form_user').focusout(function() {
        check_user();
    });
    $('#form_pass').focusout(function() {
        check_pass();
    });


    //Validar usuario
    function check_user() {
        var pattern = /^[a-zA-z\d_]{4,15}$/;
        var user = $('#form_user').val();
        if (pattern.test(user) && user !== '') {
            $('#fuser_error_message')
            $('#form_user').css('border-bottom', '2px solid #2AAF74');
        } else {
            $('#fuser_error_message').html("Ingrese un usuario valido.");
            $('#fuser_error_message').show();
            $('#form_user').css('border-bottom', '2px solid #dd3333');

        }
    }

    //Comprobar contraseña
    function check_pass() {
        var password_length = $("#form_pass").val().length;
        if (password_length < 8) {
            $('#fpassword_error_message').html("Ingresa la contraseña correcta");
            $('#fpassword_error_message').show();
            $('#form_pass').css('border-bottom', '2px solid #dd3333');

        } else {
            $('#fpassword_error_message').hide();
            $('#form_pass').css('border-bottom', '2px solid #2AAF74');

        }

    }

    $('#form').submit(function() {
        error_user = false;
        error_pass = false;

        check_user();
        check_pass();

        if (error_user == false && error_pass == false) {
            console.log('envio');
            return true;

        } else {
            console.log('no envio');
            return false;
        }
    });

});