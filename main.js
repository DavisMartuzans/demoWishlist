// Button and the popup form
var button = document.getElementById("myButton");
var popupForm = document.querySelector(".popup-form");

// Show the popup form when the button is clicked
button.addEventListener("click", function() {
  popupForm.style.display = "block";
});

// Hide the popup form when the user clicks outside of it
window.addEventListener("click", function(event) {
  if (event.target == popupForm) {
    popupForm.style.display = "none";
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const fd = new FormData(form);
  const obj = Object.fromEntries(fd);
  console.log(obj);
  
  const json = JSON.stringify(obj);
  localStorage.setItem('form', json);

  window.location.href = "wishlist.html";
})
