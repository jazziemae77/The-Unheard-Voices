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

const apiKey = 'AIzaSyBNzlkH2pV5XaQO1CBaaQbOXpXdwZHrXnA'
const blogId = '6830823664271675252';

const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/6830823664271675252/posts?key=AIzaSyBNzlkH2pV5XaQO1CBaaQbOXpXdwZHrXnA`;

 // Fetch the latest blog post
$.get(apiUrl, function(data) {
    const latestPost = data.items[0];
    const title = latestPost.title;
    const content = latestPost.content;

    // Update the DOM with the extracted information
    $('#post-title').text(title);
    $('#post-snippet').text(content.substring(0, 150) + '...');
});

/* tuv-blog-api@the-unheard-voices.iam.gserviceaccount.com */