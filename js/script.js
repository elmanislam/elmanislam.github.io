
var bruh = 0;
function changeBackgroundSonova() {
  let experiences = document.getElementById("experiences");
  experiences.style.backgroundImage = "url(images/Sonova_Hearing_Facility.jpg)";
}


function changeBackgroundCooperators() {
  let experiences = document.getElementById("experiences");
  experiences.style.backgroundImage = "url(images/Cooperators.jpg)";
}

function openResume() {
  window.open('resume.pdf');
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

