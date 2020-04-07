// Load FAQ Section
$(document).ready(function() {
  $('#faq').load('faq.html');
});

// Open Menu on Mobile
function openMenu(x) {
    x.classList.toggle("change");
    
    var z = window.matchMedia("(max-width: 900px)")
    if (z.matches) { // If less than 900px

    var y = document.getElementById("mobile-menu");
    if (y.style.left === "0vw") {
        y.style.left = "100vw";
        document.main.style.overflow = "hidden";
  } else {
        y.style.left = "0vw";
    }
  } else {
      var y = document.getElementById("mobile-menu");
      if (y.style.left === "0vw") {
          y.style.left = "100vw";
          document.main.style.overflow = "unset";
      } else {
        y.style.left = "0vw";
      }
  };
}

// Change Nav Colour On Scroll
$(document).ready(function(){
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 300) {
      $('header').addClass('active');
      $('#logo').addClass('dark');
      $('.hamburger > div').removeClass('light-bg');
      $('.hamburger > div').addClass('dark-bg');
    } else {
      $('header').removeClass('active');
      $('#logo').removeClass('dark');
      $('.hamburger > div').addClass('light-bg');
      $('.hamburger > div').removeClass('dark-bg');
    }
  });
});

// Use for HIDE / SHOW Cam

// function openJosef() {
//    document.getElementById("view").style.display = "none";
//    document.getElementById("josef").style.display = "block";
// }

// Accordion 

  // Show / Hide Answer Section
  $(document).ready(function(){
    $(function () {
      $("#faq .fold-table tr.view").on("click", function () {
        $(this).toggleClass("open").next(".fold").toggleClass("open");
      });
    });
  });

  // Search 
  var options = {
    valueNames: ["date", "question", "answer"]
  };

  // Ordering Date
  var userList = new List("faq", options);

  // Filter
  function filterHide(el) {
    for (var i = 0; i < el.length; ++i) {
      el[i].style.display = "none";
    }
  }
  function filterShow(el) {
    for (var i = 0; i < el.length; ++i) {
      el[i].style.display = "block";
    }
  }
  function filterMask() {
    var mask = document.getElementById("filter-mask");
    mask.className = "filter-mask";
    setTimeout(function () {
      mask.className = "";
    }, 1000);
  }

var filterVars = ["blue", "red", "green"]; // define filter categories here
var filterItems = document.querySelectorAll(".filter-wrap .filter-item");
for (var i = 0; i < filterVars.length; ++i) {
  window["btn" + filterVars[i]] = document.getElementById(filterVars[i]);
  window["get" + filterVars[i]] = document.querySelectorAll(
    ".filter-wrap ." + filterVars[i]
  );
  window["btn" + filterVars[i]].onclick = (function (i) {
    return function () {
      filterMask();
      setTimeout(function () {
        filterHide(filterItems);
        filterShow(window["get" + filterVars[i]]);
      }, 500);
    };
  })(i);
}
document.getElementById("filter-all").onclick = function () {
  filterMask();
  setTimeout(function () {
    filterShow(filterItems);
  }, 500);
};
