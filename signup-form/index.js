//jshint esversion:6

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValue = $("#email").val();

    if (re.test(emailValue)) {
        const result = $(".label-error")[2].innerHTML = " ";
        document.getElementsByClassName("icon-error")[2].style.display = 'none';

    } else {
        const result = $(".label-error")[2].innerHTML = "Looks like this is not an email!";
        const place = $("input")[2].placeholder = "email@example.com";
        document.getElementsByClassName("icon-error")[2].style.display = 'inline-block';
        return result;
    }
}


function validateEmpty() {

    const valEmpty = $("input");

    for (var x = 0; x < valEmpty.length; x++) {

        const valField = document.getElementsByTagName("input")[x].value;
        const nameField = document.querySelectorAll('input')[x].name;
        const icon = document.getElementsByClassName("icon-error")[x];

        console.log(valField);

        if (valField[x] == null) {
            $(".label-error")[x].innerHTML = nameField + " cannot be empty";
            const getInputs = document.getElementsByTagName("input");
            icon.style.display = 'inline-block';

        } else if (valField[x] !== null) {
            if (nameField === "Email Address") {
                validateEmail(valField[2]);
            } else {
                $(".label-error")[x].innerHTML = " ";
                icon.style.display = 'none';
            }

        } else if (valField.length !== null) {
            $(".label-error")[x].innerHTML = " ";
            icon.style.display = 'none';
        }

    }


}


function validate() {
    validateEmpty();
    validateEmail();

}