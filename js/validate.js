$(document).ready(function () {
    $("#compteForm").submit(function (e) {

        $('#errorPass').css('visibility','hidden');
        $('#errorTel').css('visibility','hidden');
        $('#errorCp').css('visibility','hidden');

        if ($('#pass').val() != $('#passconfirm').val()) {
            e.preventDefault();
            $('#errorPass').css('visibility','visible');
        }

        if (!$('#tel').val().match(/[0-9]{10}/)) {
            e.preventDefault();
            $('#errorTel').css('visibility','visible');
        }

        if (!$('#cp').val().match(/^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$/)) {
            e.preventDefault();
            $('#errorCp').css('visibility','visible');
        }
    });
});