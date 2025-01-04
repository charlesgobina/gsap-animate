console.log("Kaili is here")
const theButton = document.querySelector(".the-button");
const closeButton = document.querySelector("#close");
const timeLine = gsap.timeline();


theButton.addEventListener("click", function() {
  if (gsap.isTweening(theButton)) {
    console.log("The button is already animating");
  }
  timeLine.to(closeButton, {
    duration: 0.9,
    display: "block",
    ease: "bounce",
    top: "1%",
  })
  .to(closeButton, {
    duration: 0.5,
    left: "90%",
    delay: 0.6,
    rotate: 360,
    ease: "power2",
  }, "-=0.9") // overlap with previous animation
  .to(theButton, {
    duration: 0.8,
    width: 600,
    height: 600,
    textAlign: "center",
    ease: "power2",
  }, "-=0.8"); // overlap with previous animation
})

closeButton.addEventListener("click", function() {
  // reverse the animation
  timeLine.reverse({
    duration: 1,
    ease: "linear",
  });

  // refresh the page
  // location.reload();
  
  // gsap.to(closeButton, {
  //   duration: 1,
  //   left: "100%",
  //   rotate: 0,
  //   ease: "power2",
  // });
  // gsap.to(theButton, {
  //   duration: 0.8,
  //   width: 200,
  //   height: 200,
  //   textAlign: "center",
  //   yoyo: true,
  //   ease: "power2",
  // });
})