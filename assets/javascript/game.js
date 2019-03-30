    
  
  var targetNumber = Math.floor(Math.random() * 101) + 19;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var loses = 0;
  var crystalImages = ["assets/images/image1.jpg", "assets/images/image2.png", "assets/images/image3.jpg", "assets/images/image4.png"]
  
  function giveNumber() {
    var numberOptions = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var randomNumber = Math.floor(Math.random() * 12);
    return numberOptions[randomNumber];
  }

  function reset() {
    targetNumber = Math.floor(Math.random() * 101) + 19;

    $("#number-to-guess").text(targetNumber);

    onLoad();

    counter = 0;
    
    $("#crystals").empty();

    for (var i = 0; i < crystalImages.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");    
        imageCrystal.attr("src",crystalImages[i]);
        imageCrystal.attr("name", "idontcare");
        imageCrystal.attr("data-crystalvalue", giveNumber());
        imageCrystal.attr("value", giveNumber());
        $("#crystals").append(imageCrystal);
      }

      $("#current-total").text("Total Score: " + counter);
      
  }

  function onLoad() {
    $("#crystals")
    onDisplay("p");
};

  function onDisplay(z) {
    wonLoss(z);
};

  function wonLoss(y) {
    var x = document.getElementById("won-text");
    var x2 = document.getElementById("lose-text");
    if(y === "w") {
        x.style.visibility = "visible";
        x2.style.visibility = "hidden";
    }
    else if (y === "l") {
        x.style.visibility = "hidden";
        x2.style.visibility = "visible";
    }
    else {
        x.style.visibility = "hidden";
        x2.style.visibility = "hidden";
    }
}
  
  
  for (var i = 0; i < crystalImages.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src",crystalImages[i]);
    imageCrystal.attr("name", "idontcare");
    imageCrystal.attr("data-crystalvalue", giveNumber());
    imageCrystal.attr("value", giveNumber());
    $("#crystals").append(imageCrystal);
    
  }

    
  
  $(document).on("click", ".crystal-image", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    counter += crystalValue;
    
    
    $("#current-total").text("Total Score: " + counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins-counter").text("Wins: " + wins);
        reset();
        counter = 0;
        onDisplay("w");
    }
    else if (counter >= targetNumber) {
        loses++;
        $("#loses-counter").text("Loses: " + loses);
        reset();
        counter = 0;
        onDisplay("l")
    }
    else {
        onDisplay("a")
    }
  });