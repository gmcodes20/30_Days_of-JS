const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panel.addEventListener("click", addActive));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", addOpenActive)
);

function addActive() {
  // console.log(this);
  this.classList.toggle("active");
}

function addOpenActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
