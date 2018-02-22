window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topbutton").style.display = "block";
    } else {
        document.getElementById("topbutton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topArrow() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


var i = 0;
var txt = 'Are you Hungry ?';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("brandtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
