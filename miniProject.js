function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};

var errorMessage = "";
var fieldsMissing = "";

function fade(){
	$('#success').fadeOut();
};


$("#submitButton").click(function(){
	if(isEmail($('#email').val()) === false){
		errorMessage+= '<p>Your Email address is not valid</p>';
		};
	if($.isNumeric($('#phone').val())=== false){
		errorMessage += '<p>Your Phone Number is not numeric</p>'
	};	

	if($('#password').val() != $('#confirmPassword').val()){
		errorMessage += '<p>Your Passwords do not Match.</p>'
	};

	if($('#email').val() == ""){
	fieldsMissing += '<br>Email';
	};

	if($('#phone').val() == ""){
		fieldsMissing += '<br>Telephone';
	};

	if($('#password').val() == ""){
		fieldsMissing += '<br>Password';
	};

	if($('#confirmPassword').val() == ""){
		fieldsMissing += '<br>Confirm Password';
	};

	if(fieldsMissing != ""){
		errorMessage += '<p>The following field(s) are missing:' + fieldsMissing;
	};

	if(errorMessage != ""){
		$('.errors').html(errorMessage);

	} else{ $("#success").show();
		$('#errors').hide();
	setTimeout(fade, 2000);
	};

});
