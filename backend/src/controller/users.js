import { sql } from "../../config/database.js";
import bcryct from "bcrypt";

export const getAllUsers = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const addUsers = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = bcryct.genSaltSync(10);
  const hashedPassword = await bcryct.hash(password, salt);

  console.log(req.body);
  try {
    const data =
      await sql`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword}) RETURNING *`;
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await sql`SELECT * FROM users WHERE email=${email} `;
    if (data.length > 0) {
      res.redirect("http://localhost:3000/loading");
    } else {
      res.send("Login failed");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
