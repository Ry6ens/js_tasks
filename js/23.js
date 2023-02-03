/* Please ❤ this if you like it! */

"use strict";

//Switch dark/light

document.querySelector(".switch").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.querySelector(".switch").classList.remove("switched");
  } else {
    document.body.classList.add("light");
    document.querySelector(".switch").classList.add("switched");
  }
});

//Scroll back to top

var progressPath = document.querySelector(".progress-wrap path");

var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = "none";
progressPath.style.strokeDasharray = pathLength + " " + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition =
  "stroke-dashoffset 10ms linear";
var updateProgress = function () {
  var scroll = document.querySelector(window).scrollTop();
  var height =
    document.querySelector(document).height() -
    document.querySelector(window).height();
  var progress = pathLength - (scroll * pathLength) / height;
  progressPath.style.strokeDashoffset = progress;
};
updateProgress();
document.querySelector(window).scroll(updateProgress);
var offset = 50;
var duration = 550;
window.addEventListener("scroll", function () {
  if (jQuery(this).scrollTop > offset) {
    document.querySelector(".progress-wrap").classList.add("active-progress");
  } else {
    document
      .querySelector(".progress-wrap")
      .classList.remove("active-progress");
  }
});
document
  .querySelector(".progress-wrap")
  .addEventListener("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
