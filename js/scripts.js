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

function openFaqs() {
  var b = window.matchMedia("(max-width: 900px)")
  if (b.matches) { // If less than 900px
      document.getElementById("faqs").style.left = "0vw";
      document.getElementById("about").style.left = "100vw";
      document.getElementById("disclaimer").style.left = "100vw";
      document.getElementById("menu").style.left = "100vw";
  } else {
      document.getElementById("faqs").style.left = "0vw";
      document.getElementById("about").style.left = "50vw";
      document.getElementById("disclaimer").style.left = "50vw";
  }
}

function openAbout() {
  var b = window.matchMedia("(max-width: 900px)")  
  if (b.matches) { // If less than 900px
      document.getElementById("faqs").style.left = "0vw";
      document.getElementById("about").style.left = "0vw";
      document.getElementById("disclaimer").style.left = "100vw";
      document.getElementById("menu").style.left = "100vw";
  } else {
      document.getElementById("faqs").style.left = "0vw";
      document.getElementById("about").style.left = "0vw";
      document.getElementById("disclaimer").style.left = "50vw";
  } 
}

function openDisclaimer() {
  var b = window.matchMedia("(max-width: 900px)")  
  if (b.matches) { // If less than 900px
      document.getElementById("faqs").style.left = "0vw";
      document.getElementById("about").style.left = "0vw";
      document.getElementById("disclaimer").style.left = "0vw";
      document.getElementById("menu").style.left = "100vw";
  } else {
      document.getElementById("faqs").style.left = "0vw";
      document.getElementById("about").style.left = "0vw";
      document.getElementById("disclaimer").style.left = "0vw";
  }
} 


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
