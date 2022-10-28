import express from "express";
import {
  get,
  getById,
  post,
  remove,
  upDate
} from "../Controllers/notificationsController";

const notificationsRouter = express.Router();

notificationsRouter.get("/notification", get);

// GET users/:id

notificationsRouter.get("/notification/:id", getById);

// POST users

notificationsRouter.post("/notification", post);

// PUT users

notificationsRouter.put("/notification/:id", upDate);

// POST delete

notificationsRouter.delete("/notification/:id", remove);

export { notificationsRouter };
