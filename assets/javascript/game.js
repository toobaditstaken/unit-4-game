    
  
  var targetNumber = Math.floor(Math.random() * 101) + 19;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var loses = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  
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
    
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src",crystalImages[i]);
    imageCrystal.attr("name", "idontcare");
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    
    imageCrystal.attr("data-crystalvalue", giveNumber());
    imageCrystal.attr("value", giveNumber());
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    
  }

    
  // This time, our click event applies to every single crystal on the page. Not just one.
  $(document).on("click", ".crystal-image", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score: " + counter);
    $("#current-total").text("Total Score: " + counter);

    //if (resetGame) {
      //  $("#current-total").text("New Score: " );
        //targetNumber = Math.floor(Math.random() * 101) + 19;
    //}
    
    

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