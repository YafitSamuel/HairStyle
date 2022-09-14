import { Request, Response } from "express";
import User from "../src/Models/User";
import Joi, { any, string } from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// //Register Validation
async function register(req: Request, res: Response) {
  const schemaRegisterVal = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  //   //Validate the data before the cerate a user
  const { error } = schemaRegisterVal.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //   //Check if email already  in the database
  const emailExist: any = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //   //Hash Password
  const salt: any = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send("err");
  }
}

//Login
async function login(req: Request, res: Response) {
  const schemaLoginVal = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  //Login Validation
  const { error } = schemaLoginVal.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if email exist
  const user: any =await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email  is wrong");

  //Password id correct
  const passwordValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordValid) return res.status(400).send("Invalid Password  ");
  res.send("logged In");

  //Create and assign a token
  let SECRET_TOKEN:any = process.env.SECRET_TOKEN; //env file
  const token =  jwt.sign({ _id: user._id }, SECRET_TOKEN);
  res.header("auth-token", token).send(token);

  //Middleware

  // function auth(req: any, res: Response) {
  //   const token = req.header("auth-token");
  //   if (!token) res.status(401).send("access denied");

  //   try {
  //     const verified = jwt.verify(token, SECRET_TOKEN);
  //   } catch {
  //     res.status(400).send("Invalid Token");
  //   }
  // }
}

export { register, login };
