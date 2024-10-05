import { test } from "./01hello/hello.js";
import { add, sub } from "./01hello/math.js";
import express from "express";
import userRouter from "./routes/user.route.js";
import db from "./db/db.js";
import dotenv from "dotenv";
// import {functions} from "./01hello/file.js for using fs node functionality
// express server
const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("middleware 1 reached");
  next();
});

// 1. console log test
//  console.log(test);
db().then(() => {
  console.log("connection established");
});

// 2. math function  - - add, sub
// console.log(add(5, 6));
// console.log(sub);

//  configure dotenv _______________
dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 8001;

// Routes +++++++++++++++++++++
app.use("/api/users", userRouter);

// listen port ----------------
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

//todo status codes
// 1. informational responses ( 100 - 199 )
// 2. Sucessful responses (200 - 299 )
// 3. Redirection messages(300 - 399)
// 4. client error responses( 400 - 499 )
// 5. Server error responses( 500 - 599 )
