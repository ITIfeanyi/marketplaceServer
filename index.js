const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;
require("./modals/db");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Options");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

//routes
const homepageRoute = require("./Routes/index");
const productRoute = require("./Routes/productRoutes");

app.use("/", homepageRoute);
app.use("/", productRoute);

app.listen(PORT, () => console.log(`Application running on port ${PORT}`));
