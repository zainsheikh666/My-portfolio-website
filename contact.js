const button = document.getElementById("contact");
const form = document.getElementById("contactform");

button.addEventListener("click", () => {
  form.reset();
  window.location.href = "thanks.html";
});
