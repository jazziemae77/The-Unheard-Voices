document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector(".hamburger");
  var bodyElement = document.querySelector("body");
  
  hamburger.addEventListener("click", function() {
    // Toggle the 'active' class on the body element
    bodyElement.classList.toggle("active");

    // Add or remove the 'inactive' class based on the active state
    if (bodyElement.classList.contains("active")) {
      bodyElement.classList.remove("inactive");
    } else {
      bodyElement.classList.add("inactive");
    }
  });
});