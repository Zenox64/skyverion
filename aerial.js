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
  phone.textContent = "phone number: 218-464-0463";
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
  mail.textContent = "mailing: 529 West 4th St Unit 1, Duluth, MN 55806";
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
  navigator.clipboard.writeText("218-464-0463");
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
  navigator.clipboard.writeText("529 West 4th St Unit 1, Duluth, MN 55806");
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

      if (
        now.getMonth() === piday.getMonth() &&
        now.getDate() === piday.getDate()
      ) {
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
