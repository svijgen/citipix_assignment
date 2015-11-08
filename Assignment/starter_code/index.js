$(document).ready(function(){
	console.log("Ready");

//set variables

	var cityOptions = ['NYC', 'SF', 'LA', 'ATX', 'SYD']; 
	var backgroundImage;

//add city names to HTML
	cityOptions.forEach(function(element){
	
	$("select").append("<option>" + element + "</option>");
	});

//when the user selects the dropdown menu

$("select").change(function(){
		var optionSelect = $("select").val().toLowerCase();
		console.log(optionSelect);
		$("body").attr("class", optionSelect);



/*//if user chooses NYC, show NYC backgound
	if (optionSelect === 'NYC') {
		backgroundImage = 'nyc';
	}

//if user chooses SF, show SF background
	else if (optionSelect === 'SF') {
		backgroundImage = 'sf';
	}


//if user chooses LA, show LA background
	else if (optionSelect === 'LA') {
		backgroundImage = 'la';
	}

//if user chooses ATX, show ATC background

	else if (optionSelect === 'ATX') {
		backgroundImage = 'austin';
	}


//if user chooses SYD, show SYD background
	else if (optionSelect === 'SYD') {
		backgroundImage = 'sydney';
	}

	//$("body").css("background-image", "url(images/" + backgroundImage + ".jpg)");
	$("body").attr("class", backgroundImage);
*/
});

});

