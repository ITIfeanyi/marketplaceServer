const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index.html");
});
router.post("/", (req, res) => {
  const { title, price, category, imageURL, description } = req.body;
  console.log(req.body);
});

module.exports = router;
