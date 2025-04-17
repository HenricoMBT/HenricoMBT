var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.classList.contains("open")) {
      panel.classList.remove("open");
    } else {
      panel.classList.add("open");
    }
  });
}
