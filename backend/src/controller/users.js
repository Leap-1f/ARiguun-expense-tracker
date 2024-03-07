import { sql } from "../../config/database.js";
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

export const postAllUsers = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const result =
      await sql`INSERT INTO users(name, email, password) VALUES(${name}, ${email}, ${password}) RETURNING *`;
    const data = result.json();
    console.log(data);
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
