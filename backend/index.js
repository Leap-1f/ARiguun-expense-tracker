import express from "express";
import cors from "cors";

import { sql } from "./config/database.js";
import { user } from "./src/";

const app = express();
const port = 3010;
app.use(cors());
app.use(express.json());
app.use("users", user);

app.get("/users", async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log(data);
  res.send(data);
});
app.post("/users", async (req, res) => {
  const post =
    await sql`INSERT INTO users(name,email) VALUES('Ariguun',' ariguun10@gmail.com') RETURNING *
  `;
  console.log(post);
  res.send(post);
});
app.post("/users/createTable", async (req, res) => {
  const drop =
    await sql`INSERT INTO users(name,email) VALUES('Boorchi',' ariguun10@gmail.com') RETURNING *
  `;
  res.send(drop);
});
app.delete("/users/dropTable", async (req, res) => {
  const deleteData = await sql`DROP  TABLE users
  `;
  res.send(deleteData);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
