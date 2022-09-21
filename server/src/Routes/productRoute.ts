import express from "express";
import {
  get,
  getById,
  post,
  upDate,
  remove,
} from "../Controllers/productController";
const productRouter = express.Router();

// GET users

productRouter.get("/products", get);

// GET users/:id

productRouter.get("/products/:id", getById);

// POST users
productRouter.post("/products", post);

// POST put
productRouter.put("/products/:id", upDate);

// POST delete

productRouter.delete("/products/:id", remove);


export { productRouter };