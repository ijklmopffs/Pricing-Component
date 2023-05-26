const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
  if (this.checked) {
    one.classList.remove("annually");
    two.classList.add("annually");
    three.classList.remove("annually");
    four.classList.add("annually");
    five.classList.remove("annually");
    six.classList.add("annually");
    console.log("worked");
  } else {
    one.classList.add("annually");
    two.classList.remove("annually");
    three.classList.add("annually");
    four.classList.remove("annually");
    five.classList.add("annually");
    six.classList.remove("annually");
  }
});
