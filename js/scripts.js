/////////////////////////////////////////////////////////////////////////////////////////////
/// Nav /////////////////////////////////////////////////////////////////////////////////////

// Change Nav Colour On Scroll
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if(height > 300) {
    $('#header').addClass('active');
    $('#logo').addClass('dark');
  } else {
    $('#header').removeClass('active');
    $('#logo').removeClass('dark');

  }
});

/////////////////////////////////////////////////////////////////////////////////////////////
/// Accordion ///////////////////////////////////////////////////////////////////////////////

/// Search ///
var options = {
  valueNames: ["date", "question", "answer"]
};

/// Ordering Date
var userList = new List("reference", options);

/// Filter ///
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

/////////////////////////////////////////////////////////////////////////////////////////////
/// Maybe defunct? //////////////////////////////////////////////////////////////////////////

function openJosef() {
    document.getElementById("view").style.display = "none";
    document.getElementById("josef").style.display = "block";
}

/////////////////////////////////////////////////////////////////////////////////////////////
/// Maybe defunct? //////////////////////////////////////////////////////////////////////////

function openMenu(x) {
    x.classList.toggle("change");
    
    var z = window.matchMedia("(max-width: 900px)")
    if (z.matches) { // If less than 900px

  ///////// Don't think these should be inside the openMenu function ////////////
    var y = document.getElementById("mobile-enu");
    if (y.style.left === "0vw") {
        y.style.left = "100vw";
  } else {
        y.style.left = "0vw";
    }
  } else {
      var y = document.getElementById("mobile-enu");
      if (y.style.left === "50vw") {
          y.style.left = "100vw";
      } else {
        y.style.left = "50vw";
      }
  };
}
