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

router.get("/", get);

// GET users/:id

router.get("/:id", getById);

// POST users
router.post("/add", post);

// POST put
router.put("/update/:id", upDate);

// POST delete

router.delete("/delete/:id", remove);

// app.delete("/tasks/:id", verifyToken, (req: Request, res: Response) => {
//   return deleteTaskHelper(req, res);
// });

export { router };
