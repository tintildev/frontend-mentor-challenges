const form = document.getElementById("fromDiv");
const newsletterBtn = document.getElementById("newsletterBtn");
const thanksBtn = document.getElementById("thanksBtn");
const newsletterDiv = document.getElementById("newsletterDiv");
const thanksDiv = document.getElementById("thanksDiv");
const input = document.getElementById("form__input");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //Break default
  newsletterDiv.style.display = "none";
  thanksDiv.style.display = "flex";
});

thanksBtn.addEventListener("click", function (e) {
  e.preventDefault(); //Break default
  newsletterDiv.style.display = "flex";
  thanksDiv.style.display = "none";
  newsletterBtn.classList.remove("btn--successful");
  console.log("Remove Style");
});

input.addEventListener("keydown", function () {
  let valueEmail = document.getElementById("form__input").value;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //Check korrekt mail
  if (valueEmail.match(validRegex)) {
    newsletterBtn.classList.add("btn--successful");
    console.log("Add Button Style");
  }
});
