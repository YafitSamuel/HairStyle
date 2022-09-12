// import User from "../src/Models/User";
// import Joi, { any } from "joi";
// import  { Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// let SECRET_TOKEN: any = process.env.SECRET_TOKEN; // env file

// function auth(req: any, res: Response, next: NextFunction) {
//   const token = req.header("auth-token");

//   if (!token) res.status(401).send("access denied");

//   try {
//     const verified = jwt.verify(token, SECRET_TOKEN);
//     req.user = verified;
//     next();
//   } catch {
//     res.status(400).send("Invalid Token");
//   }
// }

// export default auth;
