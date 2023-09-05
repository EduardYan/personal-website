//Principal routes

const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.render("home");
});

module.exports = router;
