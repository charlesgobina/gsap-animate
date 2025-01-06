console.log("Kaili is here");
const theButton = document.querySelector(".the-button");
const closeButton = document.querySelector("#close");

// Create a timeline but don't immediately define the animations
let timeLine = gsap.timeline({ paused: true });

// Define the animations (separate from event listeners)
timeLine.to(closeButton, {
  duration: 0.9,
  display: "block",
  ease: "bounce",
  delay: 0.3,
}, 0)
.to(theButton, {
  duration: 0.8,
  width: 600,
  height: 600,
  textAlign: "center",
  yoyo: true,
  ease: "power2",
}, 0);

// Forward animation
theButton.addEventListener("click", function () {
  if (!timeLine.isActive()) {
    if (timeLine.reversed()) {
      timeLine.play(); // Play forward from where it stopped
    } else {
      timeLine.restart(); // Restart from the beginning
    }
  }
});

// Reverse animation
closeButton.addEventListener("click", function () {
  if (!timeLine.isActive()) {
    timeLine.reverse();
  }
});
