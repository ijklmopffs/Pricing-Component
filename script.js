const toggle = document.getElementById("toggle");
const amounts = document.getElementsByClassName("amount");

toggle.addEventListener("change", function () {
  if (this.checked) {
    for (let i = 0; i < amounts.length; i++) {
      amounts[i].textContent = "$199.99";
    }
  } else {
    for (let i = 0; i < amounts.length; i++) {
      amounts[i].textContent = "$24.99";
    }
  }
});
