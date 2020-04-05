// Detecting Mouse Clicks
for(var n=0;n<document.querySelectorAll(".drum").length;n++)
{
  document.querySelectorAll(".drum")[n].addEventListener("click", function()
  {
    var buttonInnerHtml= this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  } );
}

// Detecting Key Strokes
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key); });

function makeSound(key)
{
  switch (key) {

    case "W": case "w" : var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "A": case "a": var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "S": case "s": var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "D": case "d": var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "J": case "j": var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "K": case "k": var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "L": case "l": var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

  }
}

function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);
}
