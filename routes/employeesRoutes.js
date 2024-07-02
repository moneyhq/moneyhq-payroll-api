import express from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
} from "../controllers/employeesController.js";

const router = express.Router();

router.get("/", getEmployees);
router.get("/:id", getEmployee);
router.post("/", createEmployee);
router.patch("/:id", updateEmployee);

export default router;
