var photos = [
  
]
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
var output = document.getElementById("output");
var input = document.getElementById("inputFar");
input.addEventListener("input", convert);
function convert() {
  var inputNum = parseInt(input);
  console.log(inputNum);
  console.log(Math.sign(inputNum));
  var input = document.getElementById("inputFar").value;
  var outputCels = ((input - 32) * 5) / 9;
  if (isNaN(outputCels) === true) {
    output.textContent = "Please enter a number";
    output.style.color = "white";
  } else {
    if (input >= 33 && input <= 48) {
      output.style.color = "#00f8fe";
    } else if (input >= 49 && input <= 55) {
      output.style.color = "#008101";
    } else if (input >= 56 && input <= 62) {
      output.style.color = "#eff700";
    } else if (input >= 63 && input <= 68) {
      output.style.color = "#ff8a00";
    } else if (input >= 69 && input <= 90) {
      output.style.color = "#ff0e0e";
    } else if (input <= 31) {
      output.style.color = "#008aff";
    } else if (input <= 28 && input >= 18) {
      output.style.color = "#0043ff";
    } else if (input <= 17 && input >= 0) {
      output.style.color = "#6b00ff";
    } else if (Math.sign(input) = -1) {
      output.style.color = "#480048";
    } else {
      output.style.color = "white";
    }
    var outputCelsRound = Math.round(10 * outputCels) / 10;
    output.textContent = outputCelsRound + "\u00B0" + " C";
  }
}

/*var text = document.getElementById("input").value;
function changingText() {
  text.value = answer;
}*/
/*window.onload = choosePic;
var myPix = new Array ("'10.jpeg", "'15.JPG", "'20.jpeg");
function choosePic() {
  setInterval(() => {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
  }, 5000);
}*/
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
var cycle;
//var text = parseInt(document.getElementById("input").value);
var myPix = [
  "'05.JPG",
  "'10.jpeg",
  "'15.JPG",
  "'20.jpeg",
  "DSC_0016.JPG",
  "DSC_0017.JPG",
  "DSC_0041.JPG",
  "DSC_0177.JPG",
  "DSC_0236.JPG",
  "DSC_0338.JPG",
  "DSC_0396.JPG",
  "DSC_0506.JPG",
  "DSC_0524.JPG",
  "DSC_0607.JPG",
  "DSC_0731.JPG",
  "DSC_0764.JPG",
  "DSC_0773.JPG",
  "DSC02863.JPG",
  "IMG_0281.JPG",
  "IMG_0607.JPG",
  "IMG_7665.JPG",
  "IMG_7722.JPG",
  "IMG_8968.JPG",
  "IMG_9047.JPG",
  "IMG_9113.JPG",
  "IMG_9392.JPG",
  "IMG_20160709_155931378.jpg",
  "IMG_20170204_095554188.jpg",
  "gopher-visit.jpg",
  "me-and-coop.jpg",
  "k6(somewhat-blue).jpg",
  "k-k-c.jpg",
  "me-solo.jpg",
  "solo-nae.jpg",
  "kendra-keagan(ck wedding).jpg",
  "cute-dance.jpg",
  "lamp-build.jpeg",
  "my-mouse.jpg",
  "rpi.jpeg",
  "painting-keyboard-case.jpeg",
  "improvisation.jpeg",
  "DSC_0075.jpg",
  "DSC_0076.jpg",
  "DSC_0089-001.jpg",
  "DSC_0089.jpg",
  "DSC_0115.jpg",
  "DSC_0122-001.jpg",
  "DSC_0133.jpg",
  "speed-cube.jpg",
  "DSC_0144.jpg",
  "DSC_0150.jpg",
  "DSC_0155.jpg",
  "DSC_0162-001.jpg",
  "DSC_0163.jpg",
  "DSC_0185.jpg",
  "DSC_0196.jpg",
  "DSC_0319-001.jpg",
  "DSC_0328.jpg",
  "DSC_0337.jpg",
  "DSC_0408.jpg",
  "DSC_0410.jpg",
  "DSC_0429.jpg",
  "DSC_0440.jpg",
  "DSC_0448.jpg",
  "DSC_0476.jpg",
  "DSC_0480.jpg",
  "DSC_0529.jpg",
  "DSC_0540.jpg",
  "DSC_0541.jpg",
  "DSC_0572.jpg",
  "DSC_0581.jpg",
  "DSC_0584.jpg",
  "DSC_0613.jpg",
  "DSC_0655.jpg",
  "DSC_0658.jpg",
  "DSC_0661.jpg",
  "DSC_0732.jpg",
  "DSC_0733.jpg",
  "DSC_0786.jpg",
  "DSC_0796.jpg",
  "DSC_0852.jpg",
  "DSC_0897.jpg",
  "DSC_0903.jpg",
  "DSC_0920.jpg",
  "DSC_0993.jpg",
  "DSC_1005.jpg",
  "IMG_hollywood.jpg",
  "IMG_universaljpg.jpg",
  "universal-dad.jpg",
  "IMG_69420.jpg",
  "sn10.jpg",
  "ryan-me.jpeg",
  "switch.jpeg",
  "keyboard(3-21-21).jpeg",
  "keyboard(4-9-21).jpeg",
  "setup(4-7-21).jpeg",
  "IMG_4636.jpeg",
  "IMG_4380.jpg",
  "IMG_4364.jpg",
  "IMG_4359.jpg",
  "IMG_4361.jpg",
  "CSC_0825.jpg",
  "DSC_0009.jpg",
  "DSC_0015.jpg",
  "DSC_0061.jpg",
  "DSC_0228.jpg",
  "DSC_0249.jpg",
  "DSC_0272.jpg",
  "DSC_0335.jpg",
  "DSC_0337 (1).jpg",
  "DSC_0340.jpg",
  "DSC_0348.jpg",
  "DSC_0365.jpg",
  "DSC_0370.jpg",
  "DSC_0943.jpg",
  "DSC_0375.jpg",
  "DSC_0379.jpg",
  "DSC_0393.jpg",
  "DSC_0397.jpg",
  "DSC_0399.jpg",
  "DSC_0415.jpg",
  "DSC_0425.jpg",
  "DSC_0426.jpg",
  "DSC_0430.jpg",
  "DSC_0438.jpg",
  "DSC_0441.jpg",
  "DSC_0472.jpg",
  "DSC_0502.jpg",
  "DSC_0507.jpg",
  "DSC_0511.jpg",
  "DSC_0514.jpg",
  "DSC_0570.jpg",
  "DSC_0581 (1).jpg",
  "DSC_0590.jpg",
  "DSC_0684.jpg",
  "DSC_0736.jpg",
  "DSC_0892.jpg",
  "DSC_0923.jpg",
  "IMG_4565.jpg",
  "IMG_4574.jpg",
  "IMG_4576.jpg",
  "IMG_4578.jpg",
  "IMG_4579.jpg",
  "IMG_4580-1.jpg",
  "IMG_4582.jpg",
  "IMG_4583.jpg",
  "IMG_4584.jpg",
  "IMG_4585.jpg",
  "IMG_4588.jpg",
  "IMG_4589.jpg",
  "IMG_4591.jpg",
  "IMG_4594.jpg",
  "IMG_4595.jpg",
  "IMG_4628.jpg",
  "s20fe-back.jpg",
  "s20fe-front.jpg",
  "32-raptor.jpg",
  "selfie(on-new-phone).jpg",
  "other-sister.jpg",
  "roadster2.0.jpg",
  "park.jpg",
  "roses.jpg",
  "pi.jpg",
  "bonfire.jpg",
  "sittin-by-fire.jpg",
  "BF-Pics(2021)/fire.jpg",
  "BF-Pics(2021)/closeup.jpg",
  "BF-Pics(2021)/kalisia.jpg",
  "BF-Pics(2021)/poser.jpg",
  "BF-Pics(2021)/tth.jpg",
  "BF-Pics(2021)/DJI_0315.JPG",
  "BF-Pics(2021)/DJI_0319.JPG",
  "BF-Pics(2021)/lol.jpg",
  "BF-Pics(2021)/kandh.jpg",
  "BF-Pics(2021)/cousins.jpg",
  "BF-Pics(2021)/biggest.jpg",
  "BF-Pics(2021)/big.jpg",
  "BF-Pics(2021)/kyandbobby.jpg",
  "BF-Pics(2021)/20210617_211939.jpg",
  "BF-Pics(2021)/caseys.jpg",
  "BF-Pics(2021)/kyacart.jpg",
];
//number of pics
var numberOfPics;
numberOfPics = myPix.length;
console.log(numberOfPics);
counter.innerHTML = numberOfPics + " pictures and counting";

//pic name as header
var mainPicName = document.getElementById("imgName").getAttribute("src");
imgNameHeader.textContent = mainPicName;

function goBack() {
  window.history.back();
}
function downloadImg() {
  
}
/*
window.onload = function () {
  var name = prompt("How many pictures do you want it to display?");
  var counter = document.getElementById("counter");
  counter.innerHTML = name;
};*/
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
      window.location.replace(
        (url =
          "https://www.rubiks.com/en-us/blog/how-to-solve-the-rubiks-cube-stage-5")
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
    case "photography":
      window.location.replace((url = "photography-class.html"));
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
