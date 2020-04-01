/////////////////////////////////////////////////////////////////////////////////////////////
/// Accordion ///////////////////////////////////////////////////////////////////////////////

$(function () {
  $("#reference .fold-table tr.view").on("click", function () {
    $(this).toggleClass("open").next(".fold").toggleClass("open");
  });
});

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

function openMenu(x) {
    x.classList.toggle("change");
    
    var z = window.matchMedia("(max-width: 900px)")
    if (z.matches) { // If less than 900px
  
    var y = document.getElementById("menu");
    if (y.style.left === "0vw") {
        y.style.left = "100vw";
        document.getElementById("faqs").style.left = "0vw";
        document.getElementById("about").style.left = "0vw";
        document.getElementById("disclaimer").style.left = "0vw";
  } else {
        y.style.left = "0vw";
    }
  } else {
      var y = document.getElementById("menu");
      if (y.style.left === "50vw") {
          y.style.left = "100vw";
          document.getElementById("faqs").style.left = "100vw";
          document.getElementById("about").style.left = "100vw";
          document.getElementById("disclaimer").style.left = "100vw";
      } else {
        y.style.left = "50vw";
      }
  };
}

function openAbout() {
  var b = window.matchMedia("(max-width: 900px)")  
  if (b.matches) { // If less than 900px
      document.getElementById("about").style.left = "0vw";
      document.getElementById("faqs").style.left = "0vw";
      document.getElementById("disclaimer").style.left = "100vw";
      document.getElementById("menu").style.left = "100vw";
  } else {
      document.getElementById("about").style.left = "0vw";
      document.getElementById("faqs").style.left = "0vw";
      document.getElementById("disclaimer").style.left = "50vw";
  } 
}

function openFaqs() {
  var b = window.matchMedia("(max-width: 900px)")
  if (b.matches) { // If less than 900px
      document.getElementById("about").style.left = "0vw";
      document.getElementById("faqs").style.left = "100vw";
      document.getElementById("disclaimer").style.left = "100vw";
      document.getElementById("menu").style.left = "100vw";
  } else {
      document.getElementById("about").style.left = "0vw";
      document.getElementById("faqs").style.left = "50vw";
      document.getElementById("disclaimer").style.left = "50vw";
  }
}

function openDisclaimer() {
  var b = window.matchMedia("(max-width: 900px)")  
  if (b.matches) { // If less than 900px
      document.getElementById("about").style.left = "0vw";
      document.getElementById("faqs").style.left = "0vw";
      document.getElementById("disclaimer").style.left = "0vw";
      document.getElementById("menu").style.left = "100vw";
  } else {
      document.getElementById("about").style.left = "0vw";
      document.getElementById("faqs").style.left = "0vw";
      document.getElementById("disclaimer").style.left = "0vw";
  }
} 
