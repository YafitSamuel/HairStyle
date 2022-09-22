import { Response, Request } from "express";
import catalogSchema from "../Models/Catalog";

const get = async (req: Request, res: Response) => {
    await catalogSchema
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => res.status(404).send("not found catalog" ));
  };

const getById = async (req: Request, res: Response) => {
  await catalogSchema
    .findById(req.params.id,req.body)
    .then((sendDataById) => {
      res.status(200).send(`catalog ${req.params.id} exist:${sendDataById}`);
    })
    .catch((err) => res.status(404).send("doesn't exists"));
};

const post = async (req: Request, res: Response) => {
  await catalogSchema
    .create(req.body)
    .then((catalogsData) => res.status(200).send(`this catalog add : ${catalogsData}`))
    .catch((err) => res.status(400).send(err));
};

const upDate = async (req: Request, res: Response) => {
    await catalogSchema
      .findByIdAndUpdate(req.params.id, req.body)
      .then((upDateCatalog) =>
        res.status(200).send(`this Catalog upDate : ${upDateCatalog}`)
      )
      .catch((err) => res.status(400).send(err));
  };

const remove = async (req: Request, res: Response) => {
  await catalogSchema
    .findByIdAndDelete(req.params.id)
    .then((id) => {
      res.status(200).send(`deleted`);
    })
    .catch((error) => res.status(404).send(" massage:error"));
};
export { get ,getById, post ,upDate, remove};




