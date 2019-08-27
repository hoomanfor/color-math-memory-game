$(document).ready(function() {

    var winningNumber = Math.floor(Math.random() * 120) + 19; //random number between 19 - 120
    $("#winning-number").text(winningNumber);

    var fourNumbersArray = [];
    var userScore = 0;
    var wins = 0;
    var losses = 0; 

    function setColorValues() {
        while (fourNumbersArray.length < 4) {
            var colorNumber = Math.floor(Math.random() * 12) + 1; 
            if (fourNumbersArray.indexOf(colorNumber) === -1) {
                fourNumbersArray.push(colorNumber);
            }
        }
    };

    function resetGame() {
        winningNumber = Math.floor(Math.random() * 120) + 19; //random number between 19 - 120
        $("#winning-number").text(winningNumber);
        fourNumbersArray = [];
        userScore = 0;
        setColorValues()
    }

    setColorValues()

    $("#red").on("click", function() {
        var redValue = fourNumbersArray[0];
        userScore = userScore + redValue;
        $("#user-score").text(userScore);
        console.log("redValue: " + redValue);
        if (userScore === winningNumber) {
            wins = wins + 1;
            $("#wins").html(wins);
            resetGame();
        } else if (userScore > winningNumber) {
            losses = losses + 1;
            $("#losses").html(losses);
            resetGame();
        }
    });

    $("#blue").on("click", function() {
        var blueValue = fourNumbersArray[1];
        userScore = userScore + blueValue;
        $("#user-score").text(userScore);
        console.log("redValue: " + blueValue);
        if (userScore === winningNumber) {
            wins = wins + 1;
            $("#wins").html(wins);
            resetGame();
        } else if (userScore > winningNumber) {
            losses = losses + 1;
            $("#losses").html(losses);
            resetGame();
        }
    });

    $("#yellow").on("click", function() {
        var yellowValue = fourNumbersArray[2];
        userScore = userScore + yellowValue;
        $("#user-score").text(userScore);
        console.log("yellowValue: " + yellowValue);
        if (userScore === winningNumber) {
            wins = wins + 1;
            $("#wins").html(wins);
            resetGame();
        } else if (userScore > winningNumber) {
            losses = losses + 1;
            $("#losses").html(losses);
            resetGame();
        }
    });

    $("#green").on("click", function() {
        var greenValue = fourNumbersArray[3];
        userScore = userScore + greenValue;
        $("#user-score").text(userScore);
        console.log("greenValue: " + greenValue);
        if (userScore === winningNumber) {
            wins = wins + 1;
            $("#wins").html(wins);
            resetGame();
        } else if (userScore > winningNumber) {
            losses = losses + 1;
            $("#losses").html(losses);
            resetGame();
        }
    });

});