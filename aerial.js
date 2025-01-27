//get geolocation
if (navigator.geolocation) {
  // Request the current position
  // If successful, call getPosSuccess; On error, call getPosErr
  navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
} else {
  alert("geolocation not available?! What year is this?");
  // IP address or prompt for city?
}

//lazy loading images below
const images = document.querySelectorAll("[data-src]")

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src) {
    return;
  }
  img.src = src;
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 200px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
});

// getCurrentPosition: Error returned
function getPosErr(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      alert(
        "Refresh and allow location to allow site to get wind speed. Location data is not stored"
      );
      break;
    case err.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case err.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    default:
      alert("An unknown error occurred.");
  }
}
var vid = document.getElementById("video");
var pic = document.getElementById("photo");
var text = document.getElementById("catText");
function switchPic() {
  pic.style.display = "none";
  vid.style.display = "block";
  text.innerHTML = "video";
}
function switchVid() {
  pic.style.display = "block";
  vid.style.display = "none";
  text.innerHTML = "photo";
}

// text copying function
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var mail = document.getElementById("mail");
estyle = email.style;
style = phone.style;
mstyle = mail.style;
function baseText() {
  style.fontWeight = "normal";
  style.fontStyle = "normal";
  style.color = "#45a29e";
  phone.textContent = "phone number: 507-430-5299";
}
function ebaseText() {
  estyle.fontWeight = "normal";
  estyle.fontStyle = "normal";
  estyle.color = "#45a29e";
  email.textContent = "email: keagan @ skyverion.com";
}
function mbaseText() {
  mstyle.fontWeight = "normal";
  mstyle.fontStyle = "normal";
  mstyle.color = "#45a29e";
  mail.textContent = "mailing: P.O. Box 32, Morgan, MN 56266";
}
function copyTextHint() {
  style.fontWeight = "bold";
  style.fontStyle = "normal";
  style.color = "#45a29e";
  phone.textContent = "click to copy phone number";
}
function ecopyTextHint() {
  estyle.fontWeight = "bold";
  estyle.fontStyle = "normal";
  estyle.color = "#45a29e";
  email.textContent = "click to copy email";
}
function mcopyTextHint() {
  mstyle.fontWeight = "bold";
  mstyle.fontStyle = "normal";
  mstyle.color = "#45a29e";
  mail.textContent = "click to copy mailing address";
}
function copyText() {
  style.fontWeight = "normal";
  style.fontStyle = "italic";
  navigator.clipboard.writeText("507-430-5299");
  phone.textContent = "COPIED";
}
function ecopyText() {
  estyle.fontWeight = "normal";
  estyle.fontStyle = "italic";
  navigator.clipboard.writeText("keagan@skyverion.com");
  email.textContent = "COPIED";
}
function mcopyText() {
  mail.textContent = "COPIED";
  mstyle.fontWeight = "normal";
  mstyle.fontStyle = "italic";
  navigator.clipboard.writeText("P.O. Box 32, Morgan, MN 56266");
}
// getCurrentPosition: Successful return
//If location is not allowed
//none of the scripts below run
function getPosSuccess(pos) {
  // Get the coordinates and accuracy properties from the returned object
  var geoLat = pos.coords.latitude.toFixed(5);
  var geoLng = pos.coords.longitude.toFixed(5);
  var geoAcc = pos.coords.accuracy.toFixed(1);
  var coordinates1 = geoLat.toString() + "," + geoLng.toString();
  console.log("Your current coordinates are " + coordinates1);

  // Weather data API;
  console.log(coordinates1);
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=147065bf4bce4152b84225254232202&q=${coordinates1}&aqi=yes`
  )
    .then((response) => {
      //responds, don't really know the point of this
      return response.json();
      console.log(json);
    })
    .then((aqi) => {
      console.log(aqi);
      var windspeed = aqi["current"]["wind_mph"]; // gets only necessary data
      var town = aqi["location"]["name"];
      var state = aqi["location"]["region"];
      console.log(town);
      console.log(windspeed); // display to console only the wind data
      geoLoc.innerHTML = "in " + town + ", " + state;
      document.getElementById("header").textContent =
        "<h1>Wind speed = </h1>" + windspeed;

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
      if (windspeed >= 20) {
        header.innerHTML = windspeed + "mph is too windy to fly";
      } else {
        header.innerHTML = windspeed + "mph is good to fly now!";
      }
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
      const present = new Date(); // Tue Mar 10 2021 13:29:58 GMT+0100 (Central European Standard Time)
      const birthday = new Date();
      birthday.setDate(15); // MAR 5
      birthday.setMonth(7); // JUN 5
      birthday.setYear(2005); // JUN 5 1999

      /* Depending on what you're looking for */
      const dHours = Math.abs(present - birthday) / 36e5; // 192.03
      const dDays = Math.abs(present - birthday) / 36e5 / 24; // 8.001472
      const age = Math.abs(present - birthday) / 36e5 / 24 / 365; // not taking the dilemma of feb29 in consideration here
      /* To Display Times where objects or other forms of data were created */
      class Person {
        bornOn;
        constructor() {
          this.bornOn = new Date();
          this.createdAt = Date.now(); // i wanna say this is the "industry standard" giving the naming convention and the timestamp form, even though it's not UNIX format.
        }
      }
      var sneak = "sneak";
      const baby = new Person();
      console.log(baby.bornOn.toLocaleString());
      Math.floor(age); // 3/9/2021, 1:35:50 PM
      document.getElementById("age").textContent = Math.floor(age);

      /*$(document).ready(function() {
  $("body").hide().delay(500).fadeIn(3000)
})*/
    });
}
