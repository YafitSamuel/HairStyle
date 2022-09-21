import { Response, Request } from "express";
import productSchema from "../Models/Product";

const get = async (req: Request, res: Response) => {
    await productSchema
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => res.status(404).send("not found product" ));
  };

const getById = async (req: Request, res: Response) => {
  await productSchema
    .findById(req.params.id)
    .then((id) => {
      res.status(200).send(`product ${req.params.id} exist`);
    })
    .catch((err) => res.status(404).send("doesn't exists"));
};

const post = async (req: Request, res: Response) => {
  await productSchema
    .create(req.body)
    .then((productsData) => res.status(200).send(`this product add : ${productsData}`))
    .catch((err) => res.status(400).send(err));
};

const upDate = async (req: Request, res: Response) => {
    await productSchema
      .findByIdAndUpdate(req.params.id, req.body)
      .then((upDateUser) =>
        res.status(200).send(`this user upDate : ${upDateUser}`)
      )
      .catch((err) => res.status(400).send(err));
  };

const remove = async (req: Request, res: Response) => {
  await productSchema
    .findByIdAndDelete(req.params.id)
    .then((id) => {
      res.status(200).send(`deleted`);
    })
    .catch((error) => res.status(404).send(" massage:error"));
};
export { get ,getById, post ,upDate, remove};




