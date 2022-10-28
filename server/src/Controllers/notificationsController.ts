import { Response, Request } from "express";
import notificationsSchema from "../Models/Notifications";

const get = async (req: Request, res: Response) => {
    await notificationsSchema
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => res.status(404).send("not found notification" ));
  };

const getById = async (req: Request, res: Response) => { 
  await notificationsSchema
    .findById(req.params.id)
    .then((sendDataById) => {
      res.status(200).send(`notification ${req.params.id} exist:${sendDataById}`);
    })
    .catch((err) => res.status(404).send("doesn't exists"));
};

const post = async (req: Request, res: Response) => {
  await notificationsSchema
    .create(req.body)
    .then((notificationsData) => res.status(200).send(`this notifications add : ${notificationsData}`))
    .catch((err) => res.status(400).send(err));
};

// const upDate = async (req: Request, res: Response) => {
//   await notificationsSchema
//     .findByIdAndUpdate(req.params.id, req.body)
//     .then((notificationsSchema) =>
//       res.status(200).send(`this notification upDate : ${upDateNotification}`)
//     )
//     .catch((err) => res.status(400).send(err));
// };
const upDate = async (req: Request, res: Response) => {
  // console.log("req", req);
  await notificationsSchema
    .findByIdAndUpdate(req.params.id, req.body)
    .then((notificationsSchema) =>
      res.status(200).send(`this appointment upDate : ${notificationsSchema}`)
    )
    .catch((err) => res.status(400).send(err));
};


const remove = async (req: Request, res: Response) => {
  await notificationsSchema
    .findByIdAndDelete(req.params.id)
    .then((id) => {
      res.status(200).send(`deleted`);
    })
    .catch((error) => res.status(404).send(" massage:error"));
};
export { get ,getById, post, remove , upDate};




