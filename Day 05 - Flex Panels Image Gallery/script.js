const panels = document.querySelectorAll(".panel");

function closePanel() {
  let panel = document.querySelector(".panel.open");
  if (panel) panel.classList.remove("open");
}

function toggleOpen() {
  if (!this.className.includes("open-active")) closePanel();
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
