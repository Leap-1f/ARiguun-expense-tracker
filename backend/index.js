// import express from "express";
// import cors from "cors";
// import { user } from "./src/router/users.js";
// import bcrypt from "bcrypt";
// const port = 3033;
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/users", user);
// // app.post("/users", user);

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

import express from "express";
import cors from "cors";

import { sql } from "./config/database.js";
// import { user } from "./src/";

const app = express();
const port = 3033;
app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log(data);
  res.send(data);
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data =
      await sql`SELECT * FROM users WHERE email=${email} AND password=${password}`;
    if (data && data.length > 0) {
      // If login is successful, redirect to http://localhost:3000/
      res.redirect("http://localhost:3000/loading");
    } else {
      res.send("<p>Login failed</p>");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const post =
    await sql`INSERT INTO users(name, email, password) VALUES(${name}, ${email}, ${password}) RETURNING *
  `;
  console.log(post);
  res.send(post);
});
// app.post("/users/createTable", async (req, res) => {
//   const drop =
//     await sql`INSERT INTO users(name,email) VALUES('Boorchi',' ariguun10@gmail.com') RETURNING *
//   `;s
//   res.send(drop);
// });
// app.delete("/users/dropTable", async (req, res) => {
//   const deleteData = await sql`DROP  TABLE users
//   `;
//   res.send(deleteData);
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
