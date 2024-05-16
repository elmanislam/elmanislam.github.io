
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
  window.open('Elman-Islam-Resume.pdf');
}

function navigate() {
   document.getElementById("about-me").scrollIntoView({ behavior: "smooth"});
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openReportSonova() {
  window.open('work-term-report/index.html');
}


function openReportCooperators() {
  window.open('pages/work-term-cooperators.html');
}

