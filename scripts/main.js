var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  var bodyElement = document.querySelector("body");
  
  // Toggle the 'active' class on the body element
  bodyElement.classList.toggle("active");

  // Add or remove the 'inactive' class based on the active state
  if (bodyElement.classList.contains("active")) {
    bodyElement.classList.remove("inactive");
  } else {
    bodyElement.classList.add("inactive");
  }
});