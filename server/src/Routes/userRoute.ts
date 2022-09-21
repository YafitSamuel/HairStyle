import express from "express";
import {
  get,
  getById,
  post,
  upDate,
  remove,
} from "../Controllers/userController";
const router = express.Router();

// GET users

router.get("/users", get);

// GET users/:id

router.get("/users/:id", getById);

// POST users
router.post("/users", post);

// POST put
router.put("/users/:id", upDate);

// POST delete

router.delete("/users/:id", remove);


export { router };
