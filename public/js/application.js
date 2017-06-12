$(document).ready(function() {
  $(document).on('keydown', function(event) {
    var rightPressed = false;
    var leftPressed = false;

    function keyDownHandler(event) {
      if(event.keyCode == 83) {
          leftPressed = true;
      }
      else if(event.keyCode == 75) {
          rightPressed = true;
      }
    }

    keyDownHandler(event);

    if(leftPressed){
      var nextA = $("#player-a").next();
      $("#player-a").insertAfter(nextA)
        if ($("#playera_strip").children("td").last().attr('class') === "active") {
          alert("Player A Wins!!")
        }
    } else if (rightPressed) {
      var nextB = $("#player-b").next();
      $("#player-b").insertAfter(nextB)
        if ($("#playerb_strip").children("td").last().attr('class') === "active") {
          alert("Player B Wins!!")
        }
    }
  });

  $(document).on("click", "#restart", function() {
    location.reload(true);
  });

});
