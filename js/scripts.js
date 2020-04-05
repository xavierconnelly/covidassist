// Open Menu on Mobile

function openMenu(x) {
    x.classList.toggle("change");
    
    var z = window.matchMedia("(max-width: 900px)")
    if (z.matches) {
    document.getElementById('mobile-menu').style.left('0vw');
  }
};

// Accordion 

// Search

var options = {
  valueNames: ["date", "question", "answer"]
};

// Ordering Date

var userList = new List("reference", options);

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

// Scroll to Reference 

$(document).ready(function(){

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
    
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
});
