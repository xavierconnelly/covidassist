// Load FAQ Section
$(document).ready(function() {
  $('header').load('header.html');
  $('#faqs').load('faqs.html');
  $('footer').load('footer.html');
});

// Open Menu on Mobile
function openMenu(x) {
    x.classList.toggle("change");
    
    var z = window.matchMedia("(max-width: 900px)")
    if (z.matches) { // If less than 900px

    var y = document.getElementById("mobile-menu");
    if (y.style.left === "0vw") {
        y.style.left = "100vw";
        document.body.style.overflow = "hidden";
        $('header').removeClass('active');
        $('#logo').removeClass('dark');
        $('.hamburger > div').addClass('light-bg');
        $('.hamburger > div').removeClass('dark-bg');
  } else {
        y.style.left = "0vw";
    }
  } else {
      var y = document.getElementById("mobile-menu");
      if (y.style.left === "0vw") {
          y.style.left = "100vw";
          document.body.style.overflow = "unset";
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

// Accordion - Show / Hide Answer Section
$('#faqs').ready(function(){
  $(function () {
    $("#faqs .fold-table tr.view").on("click", function () {
      $(this).toggleClass("open").next(".fold").toggleClass("open");
    });
  });
});

// Use for HIDE / SHOW Cam

// function openJosef() {
//    document.getElementById("view").style.display = "none";
//    document.getElementById("josef").style.display = "block";
// }
