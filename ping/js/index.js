//jshint esversion:6

function valideEmail(email) {
    const emailInput = $("input").val();

    const emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const validation = emailReg.test(emailInput);

    if (validation === false) {
        $("label").show();
    } else {
        $("label").hide();
    }

}