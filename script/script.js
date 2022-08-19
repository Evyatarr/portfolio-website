function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var messageArray = ["Full-stack Developer"]
var textPosition = 0;
var speed = 100;

typewriter = () => {
  document.querySelector("#h3intro").
  innerHTML = messageArray[0].substring(0,
    textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != messageArray[0].length)
      setTimeout(typewriter, speed)
      
}

window.addEventListener("load", typewriter)
