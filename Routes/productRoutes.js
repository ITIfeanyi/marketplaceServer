const express = require("express");
const router = express.Router();
const Product = require("../modals/ProductSchema");

router.get("/products", async (req, res) => {
  const result = await Product.find({});
  return result;
});

module.exports = router;
