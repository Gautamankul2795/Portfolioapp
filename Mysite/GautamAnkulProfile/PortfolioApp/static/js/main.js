$(document).ready(function (e) {
  $win = $(window);
  $navbar = $("#header");
  $toggle = $(".toggle-button");
  var width = $navbar.width();
  toggle_onclick($win, $navbar, width);

  // resize event
  $win.resize(function () {
    toggle_onclick($win, $navbar, width);
  });

  $toggle.click(function (e) {
    $navbar.toggleClass("toggle-left");
  });
});

function toggle_onclick($win, $navbar, width) {
  if ($win.width() <= 768) {
    $navbar.css({ left: `-${width}px` });
  } else {
    $navbar.css({ left: "0px" });
  }
}

var typed = new Typed("#typed", {
  strings: ["Software Developer", "Web Developer","Software Tester","Bug Bounter"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
//swiper
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 100,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
//End swiper

var typed_2 = new Typed("#typed_2", {
  strings: ["Software Developer", "Web Developer","Software Tester","Bug Bounter"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
//counter
jQuery(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });
});
//End counter
// Chat box
"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('x782333b6673');