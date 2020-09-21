function PlaySound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // Stop the function from running all together
  audio.currentTime = 0; // Rewind to the start
  audio.play();

  key.classList.add("playing");
}

function RemoveTransition(e) {
  if (e.propertyName !== "transform") return; // Skip it if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", RemoveTransition));

window.addEventListener("keydown", PlaySound);
