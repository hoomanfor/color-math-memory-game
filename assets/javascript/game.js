// At the start of the game, a random number is selected by the app and displayed on the DOM
// At the start of the game, the user's score is 0 and displayed on the DOM
// There are 4 crystals that each represent a unique number (The number value is unknown to the user).

// When the user matches his score to the random number, he wins. The number of Wins is displayed on the DOM.
// If the user scores higher than the randome number, he losses. The number of Losses is displayed on the DOM. 
// The crystal values are a random number between 1 and 12.
// The number I am trying to guess is between 19 and 120.

$(document).ready(function() {

    var winningNumber = Math.floor(Math.random() * 120) + 19; //random number between 19 - 120
    console.log("winningNumber: " + winningNumber);
    $("#winning-number").text(winningNumber);
    var fourNumbersArray = [];

    while (fourNumbersArray.length < 4) {
        var colorNumber = Math.floor(Math.random() * 12) + 1; 
        if (fourNumbersArray.indexOf(colorNumber) === -1) {
            fourNumbersArray.push(colorNumber);
        };
    }

    console.log(fourNumbersArray); 

});