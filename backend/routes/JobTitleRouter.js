import express from "express";
import {
  createDept,
  getTitle,
  getTitleByID,
  updateJobTitle,
} from "../controllers/userController.js"; //  Added .js extension

const router = express.Router();

//dept
router.get("/", getTitle);
router.get("/getJobTitle/:id", getTitleByID);
router.post("/", createDept);
router.patch("/:id", updateJobTitle);


export default router; //  ES Module export
