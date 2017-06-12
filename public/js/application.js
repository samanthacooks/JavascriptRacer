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
    } else if (rightPressed) {
      var nextB = $("#player-b").next();
      $("#player-b").insertAfter(nextB)
    }
  });

  $(document).on("click", "#restart", function() {
    location.reload(true);
  });

  $(document).on('keyup', "#playera_strip td", function(event) {
    debugger
    if ($(this).length === 42){
      alert('Player A wins!!')
    }
  });


  $(document).on('keyup', "#playerb_strip td", function(event) {
    if ($(this).length === 42){
      alert('Player B wins!!')
    }
  });


});
