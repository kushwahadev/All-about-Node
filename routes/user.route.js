import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  getUser,
  deleteUser,
} from "../controllers/user.controller.js";
const router = express.Router();

// get all user data---------------------------

router.get("/", getAllUsers);

// create user-------------------
router.post("/", createUser);

// get user data from id----------------------

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
