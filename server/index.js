import express from "express";
import ConnectDB from "./config/db.js";
import {
  create,
  deleteProducts,
  getProducts,
  updateProducts,
} from "./controller/Products.controller.js";
const app = express();

ConnectDB();

app.use(express.json());

app.post("/product", create);
app.get("/listproducts", getProducts);
app.delete("/product/:id", deleteProducts);
app.put("/product/:id", updateProducts);

app.listen(5000, () => {
  console.log("app is working");
});
