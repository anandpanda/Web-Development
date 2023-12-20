var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).keydown(function(){
    if(level === 0){
        // $('#level-title').text('Level '+level);
        nextSequence();
    }
});

$('.btn').click(function(){
    var userChosenColour = $(this).attr('id');
    if(level) userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    if(level) checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(len){
    if(userClickedPattern[len] !== gamePattern[len]){
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
    else {
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function playSound(sound){
    var audio = new Audio("./sounds/"+sound+".mp3");
    audio.play();
}