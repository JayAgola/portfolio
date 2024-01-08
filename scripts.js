var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "-60px";
}
function closemenu() {
  sidemenu.style.right = "-300px";
}

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbxJJZDhZWEiN98hRYnprY-GIHRL6aaQMpOnlN9ZPhL2jV2Fzpc-3-ZUdChM1y1fiZ7eQg/exec";
// const form = document.forms["submit-to-google-sheet"];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => console.log("Success!", response))
//     .catch((error) => console.error("Error!", error.message));
// });

document.addEventListener("DOMContentLoaded", function () {
  const hiddenText = document.querySelector(".hidden-text");

  setTimeout(() => {
    hiddenText.style.opacity = "1";
    hiddenText.style.transform = "translateY(0)";
  }, 2000);

  function handleScrollAnimation() {
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        nav.style.backgroundColor = "rgba(220, 220, 220, 0.8)";
        nav.style.padding = "10px 0";
        nav.style.margin = "14px";
        nav.style.borderRadius = "15px";
      } else {
        nav.style.backgroundColor = "transparent";
        nav.style.padding = "20px 0";
        nav.style.color = "black";
      }
    });
  }

  setTimeout(handleScrollAnimation, 2000);
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleAboutSectionAnimation() {
  var animatedElements = document.querySelectorAll(".animonscroll");

  animatedElements.forEach(function (el) {
    if (isElementInViewport(el)) {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }
    setTimeout(handleScrollAnimation, 2000);
  });
}

window.addEventListener("scroll", handleAboutSectionAnimation);

handleAboutSectionAnimation();
