import express from "express";
import {
  get,
  getById,
  post,
  upDate,
  remove,
} from "../Controllers/catalogController";
const catalogRouter = express.Router();

// GET users

catalogRouter.get("/catalogs", get);

// GET users/:id

catalogRouter.get("/catalogs/:id", getById);

// POST users
catalogRouter.post("/catalogs", post);

// POST put
catalogRouter.put("/catalogs/:id", upDate);

// POST delete

catalogRouter.delete("/catalogs/:id", remove);


export { catalogRouter };