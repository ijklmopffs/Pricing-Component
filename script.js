const toggle = document.getElementById("toggle");
const one = document.getElementById("one");
const two = document.getElementById("two");
const content = document.getElementsByClassName("amount");
const content1 = document.getElementsByClassName("annually");

toggle.addEventListener("change", function () {
  if (this.checked) {
    two.classList.add = "annually";
    one.classList.remove = "annually";
    console.log("worked");
  }
});
