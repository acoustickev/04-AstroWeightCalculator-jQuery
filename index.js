$(document).ready(function() {

var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];     

// for loop -----> selecting planet and getting value

for(var i = 0; i < planets.length; i++) {

// $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo('#gravity');
 $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo("#ChooseYourPlanet");

};

//getting values from the user weight and planet selected -----> which calculates the total 


  	    $("#singlebutton").on("click", function() {
         
         var userWeight = $("#weight").val();

         var yourPlanets = $("#ChooseYourPlanet").val();

         var yourTotal = userWeight * yourPlanets;
         //var displayResult = document.createElement('p');
         $('#displayResult').text("Your weight would be " + Math.round(yourTotal) + "lbs");
         
         //$('#displayResult').append(displayResult);




  	    });















});//End of Ready Function 
