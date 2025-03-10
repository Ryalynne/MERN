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
  getSalary,
  createSalary,
  getSalaryList,
} from "../controllers/userController.js"; //  Added .js extension

const router = express.Router();
//dept
router.get("/getSalaryList", getSalaryList);
router.get("/getDept", getDept);
router.get("/getPosition/:id", getPositions);
router.get("/getSalary/:id", getSalary);
router.post("/addDept", createDept);
router.post("/addSalary", createSalary);
//user
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router; //  ES Module export
