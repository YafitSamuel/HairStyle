import express from "express";
import {
  get,
  getById,
  post,
  upDate,
  remove,
} from "../Controllers/appointmentController";
const appointmentRouter = express.Router();

// GET users

appointmentRouter.get("/appointments", get);

// GET users/:id

appointmentRouter.get("/appointments/:id", getById);

// POST users
appointmentRouter.post("/appointments", post);

// POST put
appointmentRouter.put("/appointments/:id", upDate);

// POST delete

appointmentRouter.delete("/appointments/:id", remove);


export { appointmentRouter };