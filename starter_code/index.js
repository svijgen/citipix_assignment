$(document).ready(function(){
	console.log("Ready");
	

	// when user inputs in search bar make event listen

	$("form").submit(function(e){
		e.preventDefault();


	// grab the city the user inputs

	var userCity = $("#city-type").val().toLowerCase();

	var backgroundPic;

	// if user inputs "NYC" or "New York City" or "New York" make the background image be nyc.jpg


		if (userCity === "nyc" || userCity === "new york city" || userCity === "new york") {

  			backgroundPic = "nyc";
		}

	// if user inputs "SF" or "San Francisco" or "Bay Area" make the background image be sf.jpg

		else if (userCity === "sf" || userCity === "san francisco" || userCity === "bay area") {

			backgroundPic = "sf";
		}

	// if user inputs "LA" or "Los Angeles" or "LAX" make the background image be la.jpg

		else if (userCity === "la" || userCity == "los angeles" || userCity == "lax") {

			backgroundPic = "la";
		}

	// if user inputs "Austin" or "ATX" make the background image be austin.jpg

		else if (userCity === "austin" || userCity === "atx") {

			backgroundPic= "austin";
		}

	// if user inputs "Sydney" or "SYD" make the background image be sydney.jpg

		else if (userCity === "sydney" || userCity === "syd") {

		backgroundPic = "sydney";
		}

	// if user inputs something that is not variations of the cities (listed above) show alert box that says "Oops! Try again!"

		if (backgroundPic) {
			$("body").css("background-image", "url(images/" + backgroundPic + ".jpg)");

		} 
		else {
			alert ('Invalid input, please try again');
		}

		$(this).trigger("reset");

		});
	});

