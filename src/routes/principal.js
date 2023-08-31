//Principal routes

const {Router} = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.render("home");
});

router.get("/about", (req, res) => {
  return res.render("about")
})

module.exports = router;
