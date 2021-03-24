const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;
require("./modals/db");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
const homepageRoute = require("./Routes/index");
const productRoute = require("./Routes/productRoutes");

app.use("/", homepageRoute);
app.use("/", productRoute);

app.listen(PORT, () => console.log(`Application running on port ${PORT}`));
