//aos effects
AOS.init({
  easing: "ease-out-back",
  duration: 1500,
});

function handleScroll() {
  let element = document.querySelector("#projects-text");

  if (isElementInViewport(element)) {
    //maquine writer effect
    new TypeIt(element, {
      speed: 70,
      loop: false,
      waitUntilVisible: true,
    })
      .type("My ", { delay: 300 })
      .type("recynts ", { delay: 300 })
      .move(-1)
      .delete(4)
      .move(null, { to: "END" })
      .type("ent")
      .type(" projects")
      .go();

    // Once the animation has run, remove the scroll event
    window.removeEventListener("scroll", handleScroll);
  }
}

// Helper function to check if an element is visible in the current window
function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//validating for writter effect
if (window.innerWidth <= 1024) {
  window.addEventListener("scroll", handleScroll);
} else {
  handleScroll();
}
