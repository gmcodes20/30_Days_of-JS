let keys = document.querySelectorAll(".keys");

document.addEventListener("keyup", playSound);

function playSound(e) {
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`),
    audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  // console.log(e.keyCode, " ");
  // console.log("Hello");

  if (!key) return;
  audio.play();
  audio.currentTime = 0;
  key.classList.add("playing");

  // Select keys and apply a foreach event

  keys.forEach((key) => key.addEventListener("transitionend", transitionEnd));

  function transitionEnd() {
    key.classList.remove("playing");
  }
}
