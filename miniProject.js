function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
};

var errorMessage = "";
var fieldsMissing = "";

// This function clears all of the text in all of the inputs
function clearText() {
    $("input")
        .toArray()
        .map(el => (el.value = ""));
}

// This shows a complete message before fading away. 
function fade() {
    $('#success').fadeOut();
};

// This allows the logic to run on the page to see if all of the criteria is met before submitting the information on the form. 
$("#submitButton").click(function() {
    if (isEmail($('#email').val()) === false) {
        errorMessage += '<p>Your Email address is not valid</p>';
    };
    if ($.isNumeric($('#phone').val()) === false) {
        errorMessage += '<p>Your Phone Number is not numeric</p>'
    };

    if ($('#password').val() != $('#confirmPassword').val()) {
        errorMessage += '<p>Your Passwords do not Match.</p>'
    };

    if ($('#email').val() == "") {
        fieldsMissing += '<br>Email';
    };

    if ($('#phone').val() == "") {
        fieldsMissing += '<br>Telephone';
    };

    if ($('#password').val() == "") {
        fieldsMissing += '<br>Password';
    };

    if ($('#confirmPassword').val() == "") {
        fieldsMissing += '<br>Confirm Password';
    };

    if (fieldsMissing != "") {
        errorMessage += '<p>The following field(s) are missing:' + fieldsMissing;
    };

    if (errorMessage != "") {
        $('.errors').html(errorMessage);

    } else {
        $("#success").show();
        $('#errors').hide();
        setTimeout(fade, 2000);
    };
    // Clears all text after the sign up button is pressed
    clearText();
});