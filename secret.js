var popup1 = document.getElementById("popup1");
var triangle1 = document.getElementById("triangle1");
function copy1() {
  window.open("https://www.luecktree.com/");
}
function showImg() {
  document.getElementById("hiddenImg").style.display = "inline-block";
}
function hideImg() {
  document.getElementById("hiddenImg").style.display = "none";
}
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
const jr = document.getElementById("jr");
const allClasses = [
  "lr-me",
  "sr-me",
  "p-me",
  "lr-mS",
  "p-mS",
  "pp-mS",
  "lr-mX",
  "p-mX",
  "lr-mY",
  "p-mY",
  "sm-ct",
  "semi",
];
function pressed(e) {
  e.preventDefault(e); // Prevents default action (redirect) when the form is submitted
  var text = document.getElementById("jr").value;
  var output = document.getElementById("output");
  switch (text) {
    //other stuff
    case "tesla notes":
      var bgImg = document.querySelector("#li");
      bgImg.classList.add("background-images");
      document.getElementById("li").style.backgroundImage = "url('')";
      tesla.innerHTML = "";
      header.innerHTML = "";
      jr.style.display = "none";
      hide.style.display = "none";
      window.location.replace((url = "tesla notes.html"));
      break;
    case "science notes":
      window.location.replace((url = "particle theory test review.html"));
      break;
    case "basketball highlights":
      window.location.replace("basketball-highlights.html");
      break;
    case "screen size":
      window.location.replace((url = "screen-size.html"));
      break;
    case "bitcoin":
      var walletAddress = "bc1qdkcmdk3wsyt2hgj48cgyrr70hf5dmag4l204es";
      header.innerHTML = walletAddress;
      navigator.clipboard.writeText(walletAddress);
      setTimeout(() => {
        alert("Wallet address saved to clipboard");
      }, 250);
      console.log(
        "Success, bitcoin wallet address automatically copied to clipboard"
      );
      break;
    case "suggestion":
      window.location.replace((url = "suggestion.html"));
      break;
    case "slime":
      const sneak = new Audio("sneak.mp3");
      sneak.play();
      break;
    case "errday":
      const errday = new Audio("errday.mp3");
      errday.play();
      break;
    case "pics":
      window.location.replace((url = "pics.html"));
      break;
    case "mask law":
      window.location.replace((url = "mask.html"));
      break;
    case "cybertruck v ford":
      window.location.replace((url = "cybertruck.html"));
      break;
    case "youtube playlist":
      window.location.replace(
        (url =
          "https://youtube.com/playlist?list=PL9ohnLdAHcjmM6Dx9unBDW3Kdi42ddPdf")
      );
      break;
    case "bbb chapter 1":
      window.location.replace((url = "blackjack-bluebook-chapter1.html"));
      break;
    case "bbb chapter 2":
      window.location.replace((url = "blackjack-bluebook-chapter2.html"));
      break;
    case "bbb chapter 3":
      window.location.replace((url = "blackjack-bluebook-chapter3.html"));
      break;
    case "pc specs":
      window.location.replace(
        (url = "https://pcpartpicker.com/user/klueck21/saved/bPNJf7")
      );
      break;
    case "keyboard specs":
      window.location.replace("keyboard-specs.html");
      break;
    case "desk setup":
      window.location.replace((url = "desk-setup.html"));
      break;
    case "rubiks guide":
      window.location.replace((url = "rubiks-guide.pdf"));
      break;
    case "cube in cube":
      window.location.replace(
        (url =
          "https://ruwix.com/the-rubiks-cube/rubiks-cube-patterns-algorithms/")
      );
      break;
    case "center swap":
      window.location.replace(
        (url =
          "https://sites.psu.edu/phelpsinstructionset/tricks/center-cube-swap/")
      );
      break;
    case "groovebook":
      window.location.replace((url = "groovebook.html"));
      break;
    case "blog":
      window.location.replace((url = "blog.html"));
      break;
    case "tesla counter":
      window.location.replace((url = "tesla-counter.html"));
      break;
    case "model y vs expedition":
      window.location.replace((url = "MY-06E.html"));
      break;
    case "s10e vs iphone 8":
      window.location.replace((url = "s10e-compared.html"));
      break;
    case "changelog":
      window.location.replace((url = "changelog.html"));
      break;
    case "v1":
      window.location.replace((url = "v1.html"));
      break;
    case "home":
      window.location.replace((url = "index.html"));
      break;
    case "photo gallery":
      window.location.replace((url = "pics-gallery.html"));
      break;
    case "contact":
      window.location.replace((url = "contact.html"));
      break;
    case "contact":
      window.location.replace((url = "phone.html"));
      break;
    case "photography":
      window.location.replace((url = "photography-class.html"));
      break;
    case "convert":
      window.location.replace((url = "celsius-fahrenheit.html"));
      break;
    case "college art":
      window.location.replace((url = "college-art.html"));
      break;
    case "yeezy":
      window.location.replace((url = "yeezy.html"));
      break;
    case "college writing":
      window.location.replace((url = "/college-writing/project4b.html"));
    default:
      tesla.innerHTML = "";
      header.innerHTML = greeting;
      document.getElementById("header").style.color = "#45a29a";
      document.getElementById("header").style.fontFamily = "";
      document.getElementById("button").style.backgroundColor = "";
      document.getElementById("footer").style.display = "inline-block";
      document.getElementById("footer").style.color = "white";

      break;
  }
  jr.value = "";
}
//my bday wallpaper
var now = new Date();
let keaganbday = new Date("July 15");
console.log(now);

if (
  now.getMonth() === keaganbday.getMonth() &&
  now.getDate() === keaganbday.getDate()
) {
  console.log(now);
  document.body.classList.add("keagan-bday-background");
  sneak.innerHTML = "Happy Birthday Keagan!!!";
}
//special pi day wallpaper
var now = new Date();
let piday = new Date("March 14");

if (now.getMonth() === piday.getMonth() && now.getDate() === piday.getDate()) {
  document.body.classList.add("pi-day");
  sneak.innerHTML = "Happy Pi Day!";
}
//747
var now = new Date();
if (
  (now.getHours() === 19 || now.getHours() === 7) &&
  now.getMinutes() === 47
) {
  document.body.classList.add("seven-forty-seven");
}
//11:11
var now = new Date();
if (
  (now.getHours() === 23 || now.getHours() === 11) &&
  now.getMinutes() === 11
) {
  document.body.classList.add("eleven-eleven");
}

jr.addEventListener("keypress", function (e) {
  const key = e.keyCode || e.which;

  if (key === 13) {
    pressed(e);
  }
});
window.onload = function () {
  document.getElementById("jr").focus();
};
var today = new Date();
var hourNow = today.getHours();
var greeting;
console.log(hourNow);
if (hourNow > 18) {
  greeting = "GOOD EVENING!";
} else if (hourNow > 12) {
  greeting = "GOOD AFTERNOON!";
} else if (hourNow > 0) {
  greeting = "GOOD MORNING!";
} else {
  greeting = "Welcome!";
}
header.innerHTML = greeting;
console.log(greeting);
const initial =
  'Welcome to my site! Type "help" for help. Currently the background ';
const more =
  "images are sticking after you return to the main page. The background";
const evenMore = "may not change. Refresh and you should be good.";
function alertTest() {
  alert(
    'Welcome to my site! Type "help" for help.' +
      "\n" +
      'Type "changelog" for a list of recent updates.'
  );
}
//alertTest();

/*$(document).ready(function() {
  $("body").hide().delay(500).fadeIn(3000)
})*/
