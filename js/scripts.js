function openJosef() {
            document.getElementById("view").style.display = "none";
            document.getElementById("josef").style.display = "block";
        }

function openMenu(x) {
  x.classList.toggle("change");
  
  var y = document.getElementById("menu");
  if (y.style.left === "50vw") {
    y.style.left = "100vw";
    document.getElementById("faqs").style.left = "100vw";
    document.getElementById("about").style.left = "100vw";
    document.getElementById("disclaimer").style.left = "100vw";
  } else {
    y.style.left = "50vw";
  }
}


function openFaqs() {
   document.getElementById("faqs").style.left = "0vw";
   document.getElementById("about").style.left = "50vw";
   document.getElementById("disclaimer").style.left = "50vw";
 }

function openAbout() {
   document.getElementById("faqs").style.left = "50vw";
   document.getElementById("about").style.left = "0vw";
   document.getElementById("disclaimer").style.left = "50vw";
 }

function openDisclaimer() {
   document.getElementById("faqs").style.left = "50vw";
   document.getElementById("about").style.left = "50vw";
   document.getElementById("disclaimer").style.left = "0vw";
 }
