import express, { Request, Response, Router } from "express";
import { connectDb } from "./DB/db";
import dotenv from "dotenv";
import { router } from "./Routes/userRoute";
import User from "./Models/User";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const port = process.env.PORT || 8001;
const app = express();
dotenv.config();
connectDb.then((val) => val).catch((err) => err);
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});



//Register Validation
const schemaRegisterVal = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

app.post("/register", async (req: Request, res: Response) => {
  //Validate the data before the cerate a user
  const { error } = schemaRegisterVal.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if email already  in the database
  const emailExist: any = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hash Password
  const salt = await bcrypt.genSalt(10);
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
});

//Login
const schemaLoginVal = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

//Login Validation
app.post("/login", async (req: Request, res: Response) => {
  const { error } = schemaLoginVal.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if email exist
  const user: any = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email  is wrong");

  //Password id correct
  const passwordValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordValid) return res.status(400).send("Invalid Password  ");
  // res.send("logged In");

  //Create and assign a token
  let SECRET_TOKEN:any= process.env.SECRET_TOKEN //env file 
  const token = jwt.sign({ _id: user._id },SECRET_TOKEN);
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


});


   