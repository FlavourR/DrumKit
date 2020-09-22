// document.querySelectorAll(".drum").length : will give the numbers of drum class
var numOfDrumClass = document.querySelectorAll(".drum").length;

// Detecting Mouse button press
for (var i = 0; i < numOfDrumClass; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    // "this.innerHTML" : will give back a content inside HTML of ("button") tag,
    //  the one that we use for query. See more in index.html or console.log(this) then
    //  u'll get it !
    var buttonInnerHTML = this.innerHTML;
    this.style.color = "blue";
    console.log(buttonInnerHTML);
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard press
// Passing Function(event) as a parameter
document.addEventListener("keydown", function(event) {
  // 1.) In function(event) it'll log out its property, one with property name "key".
  // You can conosle.log to see the property. This key gives back a keyboard letter
  //  "w", "a", "s",... So in order to use Object in Javascript we use Dot-operator
  //  event.key to call the property key of event object out !
  // 2.) function(event) : also called "call-back function"
  console.log(event);
  //  Pass this "XXX" as a input parameter for makeSound();
  makeSound(event.key);
  buttonAnimation(event.key);

})

function makeSound(key) {
  switch (key) {
    case "w":

      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":

      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":

      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":

      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":

      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":

      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":

      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  // Adding CSS class into Javascript
  activeButton.classList.add("pressed");

  // Removing CSS class from Javascript - with DELAY
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 200);
}
