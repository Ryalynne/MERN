import express from "express";
import {
  getDept,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createDept,
  getPositions,
  getSalary
} from "../controllers/userController.js"; //  Added .js extension

const router = express.Router();
router.get("/dept", getDept);
router.get("/position/:id", getPositions);
router.get("/salary/:id", getSalary);
router.post("/deptAdd", createDept);
//
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router; //  ES Module export
