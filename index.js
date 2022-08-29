 alert("hello");
// document.querySelectorAll(".w").addEventListener("click",function(){
//     this.innerHTML.style.color="red";
// })
var num = document.querySelectorAll(".drum").length;
for(var i = 0; i < num; i++ ) {
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

     var prsc = this.innerHTML;
     passEvent( prsc);

});
}

document.addEventListener("keypress", function(event){

    //  var prsk  = this.innerHTML;
     passEvent(event.key);

});






function passEvent(prs){
    switch(prs) {
            
        case "w" :
            var tom1 = new Audio( "sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var tom5 = new Audio("sounds/snare.mp3");
            tom5.play();
            break;

        case "k":
            var tom6 = new Audio("sounds/kick-bass.mp3");
            tom6.play();
            break;

        case "l":
            var tom7 = new Audio("sounds/crash.mp3");
            tom7.play();
            break;

            default: console.log(key);

          

    }
}














// alert("hello");
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }

// document.addEventListener("keypress", function(event) {

//   makeSound(event.key);

//   buttonAnimation(event.key);

// });


// function makeSound(key) {

//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;

//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;

//     case "s":
//       var tom3 = new Audio('sounds/tom-3.mp3');
//       tom3.play();
//       break;

//     case "d":
//       var tom4 = new Audio('sounds/tom-4.mp3');
//       tom4.play();
//       break;

//     case "j":
//       var snare = new Audio('sounds/snare.mp3');
//       snare.play();
//       break;

//     case "k":
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//       break;

//     case "l":
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//       break;


//     default: console.log(key);

//   }
// }


// function buttonAnimation(currentKey) {

//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);

// }
