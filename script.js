// console.log("hello world")
// gsap.to('h1', {x:400, duration:3})
// gsap.to(".fred", {
//   x:700,
//   y:400,
//   scale:3,
//   rotation: 360,
//   duration: 3
// })

// gsap.from(".fred", {
//   x:700,
//   y:400,
//   scale:3,
//   rotation: 360,
//   duration: 3
// })

// gsap.fromTo(".fred", {
//   x:700,
//   y:400,
//   opacity:0
// }, {
//   x:400,
//   y:200,
//   scale:3,
//   opacity:1,
//   duration:3
// })

// gsap.to(".big", {x:400, duration:3, repeat:-1, yoyo:true})
// gsap.to(".small", {x:500, duration:2})


// const timeContainer = document.querySelector(".digital-time-container");
// const d = new Date();
// const seconds = d.getSeconds();
// const minutes = d.getMinutes();
// const hours = d.getHours();
// timeContainer.innerHTML = `${hours}:${minutes}:${seconds}`;

// // Function that converts time to degrees
// function convertToDegrees(time, max) {
//   return (time / max) * 360;
// }

// // Hour-hand animation
// gsap.to("#hour-hand", {
//   rotation: 360,
//   duration: 43200, // 12 hours in seconds
//   ease: "linear",
//   repeat: -1,
//   startAt: { rotation: convertToDegrees(hours % 12, 12) + (minutes / 60) * 30 }
// });

// // Minute-hand animation
// gsap.to("#minute-hand", {
//   rotation: 360,
//   duration: 3600, // 1 hour in seconds
//   ease: "linear",
//   repeat: -1,
//   startAt: { rotation: convertToDegrees(minutes, 60) + (seconds / 60) * 6 }
// });

// // Second-hand animation
// gsap.to("#second-hand", {
//   rotation: 360,
//   duration: 60, // 1 minute in seconds
//   ease: "linear",
//   repeat: -1,
//   startAt: { rotation: convertToDegrees(seconds, 60) }
// });

// function to make ids with ls cd mv and cp rotate 90 degrees after 60 seconds
// gsap.to("#ls", {
//   rotation: 360,
//   duration: 60,
//   ease: "linear",
//   repeat: -1,
//   startAt: { rotation: 0 }
// });

// gsap.to("#cd", {
//   rotation: 360,
//   duration: 60,
//   ease: "linear",
//   repeat: -1,
//   startAt: { rotation: 0 }
// });

// gsap.to("#mv", {
//   rotation: 360,
//   duration: 60,
//   ease: "linear",
//   repeat: -1,
//   startAt: { rotation: 0 }
// });

// gsap.to("#cp", {
//   rotation: 360,
//   duration: 60,
//   ease: "linear",
//   repeat: -1,
//   startAt: { rotation: 0 }
// });

// make clock-wrapper bounce after 60 seconds




const timeContainer = document.querySelector(".digital-time-container");
const theButton = document.querySelector(".the-button");


theButton.addEventListener("click", function() {
  gsap.to(theButton, {
    duration: 1,
    width: 200,
    height: 200,
    textAlign: "center",
    y:10,
    yoyo: true,
    ease: "power2"
  });
})


function updateClock() {
  const d = new Date();
  const seconds = d.getSeconds();
  const minutes = d.getMinutes();
  const hours = d.getHours();

  // Display digital time
  timeContainer.innerHTML = `${hours}:${minutes}:${seconds}`;

  // Calculate rotations
  const secondRotation = (seconds / 60) * 360;
  const minuteRotation = (minutes * 6) + (seconds / 10); // 6 degrees per minute + 0.1 degrees per second
  const hourRotation = (hours % 12) * 30 + (minutes / 60) * 30; // 30 degrees per hour + 0.5 degrees per minute

  // Animate clock hands
  gsap.to("#second-hand", { rotation: secondRotation, duration: 1, ease: "linear" });
  gsap.to("#minute-hand", { rotation: minuteRotation, duration: 1, ease: "linear" });
  gsap.to("#hour-hand", { rotation: hourRotation, duration: 1, ease: "linear" });
  // gsap.to(".clock-wrapper", {
  //   duration: 30,
  //   borderRadius: "1%",
  //   repeat: 2,
  // });
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock on load
updateClock();

