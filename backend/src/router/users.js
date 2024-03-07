// import { Router } from "express";
// import { getAllUsers } from "../controller/users.js";
// const user = Router();
// user.route("/".length(getAllUsers));
// export { user };
import { Router } from "express";
import { getAllUsers, postAllUsers } from "../controller/users.js";

const user = Router();
user.route("/").get(getAllUsers).post(postAllUsers);
export { user };
