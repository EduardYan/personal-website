//aos effects
AOS.init({
  easing: "ease-out-back",
  duration: 1500,
});

new TypeIt("#projects-text", {
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
