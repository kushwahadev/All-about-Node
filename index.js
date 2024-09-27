import { test } from "./01hello/hello.js";
import { add, sub } from "./01hello/math.js";
import express from "express";
import users from "./data/user.json" assert { type: "json" };
// import {functions} from "./01hello/file.js for using fs node functionality
// express server
const app = express();
// Middleware
app.use(express.urlencoded({ extended: false }));

// 1. console log test
//  console.log(test);

// 2. math function  - - add, sub
// console.log(add(5, 6));
// console.log(sub);

// 3. filesystem

app.get("/", (req, res) => {
  res.send("Hello World! from Home Page");
});
app.get("/about", (req, res) => {
  res.send("Hello from About Page " + req.query.name);
});

// Routes +++++++++++++++++++++

// get all user data
app.get("/api/users", (req, res) => {
  const html = `
  ${users
    .map(
      (user) => `<h5>${user.id} :  ${user.first_name} ${user.last_name}</h5>`
    )
    .join("")}
    `;
  return res.send(html);
});

// get user data from :id or update or delete

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    console.log(typeof id);
    const user = users.find((user) => user.id === id);

    return res.json(user);
  })
  .patch((req, res) => {
    // todo : update user data
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // todo : delete user
    return res.json({ status: "pending" });
  });

// create new user
app.post("/api/users", (req, res) => {
  // todo : create a new user
  const body = req.body;
  const newUser = {
    id: users.length + 1,
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  };
  users.push(newUser);

  return res.json({ status: "pending" });
});

// listen port ----------------
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
