import { Response, Request } from "express";
import appointmentSchema from "../Models/Appointment";

const get = async (req: Request, res: Response) => {
    await appointmentSchema
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => res.status(404).send("not found appointment" ));
  };

const getById = async (req: Request, res: Response) => {
  await appointmentSchema
    .findById(req.params.id,req.body)
    .then((sendDataById) => {
      res.status(200).send(`${sendDataById} `);
    })
    .catch((err) => res.status(404).send("doesn't exists"));
};

const post = async (req: Request, res: Response) => {
  await appointmentSchema
    .create(req.body)
    .then((appointmentsData) => res.status(200).send(`this appointment add : ${appointmentsData}`))
    .catch((err) => res.status(400).send(err));
};

const upDate = async (req: Request, res: Response) => {
    await appointmentSchema
      .findByIdAndUpdate(req.params.id, req.body)
      .then((upDateAppointment) =>
        res.status(200).send(`this appointment upDate : ${upDateAppointment}`)
      )
      .catch((err) => res.status(400).send(err));
  };

const remove = async (req: Request, res: Response) => {
  await appointmentSchema
    .findByIdAndDelete(req.params.id)
    .then((id) => {
      res.status(200).send(`deleted`);
    })
    .catch((error) => res.status(404).send(" massage:error"));
};
export { get ,getById, post ,upDate, remove};




