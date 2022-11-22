// import { Response, Request } from "express";
// import adminSchema from "../Models/Admin";

// const get = async (req: Request, res: Response) => {
//   await adminSchema
//     .find()
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => res.status(404).send("not found admin"));
// };

// const getById = async (req: Request, res: Response) => {
//   await adminSchema
//     .findById(req.params.id, req.body)
//     .then((sendDataById) => {
//       res.status(200).send(`${sendDataById} `);
//     })
//     .catch((err) => res.status(404).send("doesn't exists"));
// };

// const post = async (req: Request, res: Response) => {
//   await adminSchema
//     .create(req.body)
//     .then((adminsData) =>
//       res.status(200).send(`this admin add : ${adminsData}`)
//     )
//     .catch((err) => res.status(400).send(err));
// };

// const upDate = async (req: Request, res: Response) => {
//   // console.log("req", req);
//   await adminSchema
//     .findByIdAndUpdate(req.params.id, req.body)
//     .then((upDateadmin) =>
//       res.status(200).send(`this admin upDate : ${upDateadmin}`)
//     )
//     .catch((err) => res.status(400).send(err));
// };

// const remove = async (req: Request, res: Response) => {
//   await adminSchema
//     .findByIdAndDelete(req.params.id)
//     .then((id) => {
//       res.status(200).send(`deleted`);
//     })
//     .catch((error) => res.status(404).send(" massage:error"));
// };
// export { get, getById, post, upDate, remove };
