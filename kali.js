const commands = [
  {
    command: "ls",
    description: "Lists files and directories in the current directory. Use -l for detailed view and -a to show hidden files."
  },
  {
    command: "cd directory",
    description: "Changes the current directory. Use cd .. to go up one level, or cd ~ to go to home directory."
  },
  {
    command: "pwd",
    description: "Print Working Directory - shows the current directory path you're in."
  },
  {
    command: "mkdir dirname",
    description: "Creates a new directory with the specified name."
  },
  {
    command: "rm filename",
    description: "Removes files. Use -r flag for directories. Be careful - deletion is permanent!"
  }
];

let currentIndex = 0;

function updateCard() {
  document.getElementById('commandText').textContent = commands[currentIndex].command;
  document.getElementById('descriptionText').textContent = commands[currentIndex].description;
  document.getElementById('counter').textContent = `${currentIndex + 1}/${commands.length}`;
}

function nextCommand() {
  currentIndex = (currentIndex + 1) % commands.length;
  updateCard();
}

function previousCommand() {
  currentIndex = (currentIndex - 1 + commands.length) % commands.length;
  updateCard();
}

// Initialize the card
updateCard();

console.log("Kaili is here");
const theButton = document.querySelector(".the-button");
const closeButton = document.querySelector("#close");

// Create a timeline but don't immediately define the animations
let timeLine = gsap.timeline({ paused: true });

// Define the animations (separate from event listeners)
timeLine.to(closeButton, {
  duration: 0.9,
  display: "block",
  ease: "power2.inOut",
  delay: 0.3,
}, 0)
.to(theButton, {
  duration: 0.8,
  width: 600,
  height: 600,
  textAlign: "center",
  yoyo: true,
  ease: "bounce",
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
