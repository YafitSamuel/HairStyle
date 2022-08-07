import { Response, Request } from "express";
// import { router } from "../Routes/userRoute";
import userSchema from "../Models/User";

const get = async (req: Request, res: Response) => {
  await userSchema
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send({ err: "not found users" }));
};

const getById = async (req: Request, res: Response) => {
  await userSchema
    .findById(req.params.id)
    .then((id) => {
      res.status(200).send(`user ${req.params.id} exist`);
    })
    .catch((error) => res.status(404).send("not found user"));
};

const post = async (req: Request, res: Response) => {
  await userSchema
    .create(req.body)
    .then((userData) => res.status(200).send(`this user add : ${userData}`))
    .catch((err) => res.status(400).send(err));
};

const upDate = async (req: Request, res: Response) => {
  await userSchema
    .findByIdAndUpdate(req.params.id, req.body)
    .then((upDateUser) =>
      res.status(200).send(`this user upDate : ${upDateUser}`)
    )
    .catch((err) => res.status(400).send(err));
};

const remove = async (req: Request, res: Response) => {
  await userSchema
    .findByIdAndDelete(req.params.id)
    .then((id) => {
      res.status(200).send(`user ${req.params.id} deleted`);
    })
    .catch((error) => res.status(404).send("not found user"));
};
export { get, getById, post, upDate, remove };
