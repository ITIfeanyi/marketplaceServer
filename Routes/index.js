const express = require("express");
const router = express.Router();
const Product = require("../modals/ProductSchema");

router.get("/", (req, res) => {
  res.sendFile("index.html");
});
router.post("/", async (req, res) => {
  const { title, price, category, imageURL, description } = req.body;
  try {
    const newProduct = new Product({
      title,
      price,
      category,
      imageURL,
      description,
    });
    await newProduct.save();
    res.status(200).json({ message: "Product uploaded successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
