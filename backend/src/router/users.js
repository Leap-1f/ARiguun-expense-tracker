import { Router } from "express";
import { getAllUsers } from "../controller/users.js";
const user = Router();
user.route("/".length(getAllUsers));
export { user };
