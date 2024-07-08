import "dotenv/config.js";
import {
  getAllEmployees,
  getSingleEmployee,
  createSingleEmployee,
  updateSingleEmployee,
} from "../models/employeesModel.js";

//get/api/employees
const getEmployees = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const offset = (page - 1) * limit;

  try {
    const employees = await getAllEmployees(Number(limit), Number(offset));

    const PORT = process.env.PORT;
    const BACKEND_URL = process.env.BACKEND_URL;

    const baseUrl = `${BACKEND_URL}:${PORT}/api/employees`;
    const nextPage =
      employees.length < limit
        ? null
        : `${baseUrl}?page=${Number(page) + 1}&limit=${limit}`;
    const prevPage =
      page > 1 ? `${baseUrl}?page=${Number(page) - 1}&limit=${limit}` : null;

    res.json({
      status: "success",
      message: "Employees fetched successfully",
      currentPage: Number(page),
      totalPages: employees.length < limit ? Number(page) : Number(page) + 1,
      limit: Number(limit),
      employees,
      nextPage,
      prevPage,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

//get/api/employees/:id
const getEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await getSingleEmployee(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employee" });
  }
};

//post/api/employees/
const createEmployee = async (req, res) => {
  try {
    const newEmployee = await createSingleEmployee(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: "Failed to create employee" });
  }
};

//patch/api/employees/:id
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEmployee = await updateSingleEmployee(id, req.body);
    if (!updatedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: "Failed to update employee" });
  }
};

export { getEmployees, getEmployee, createEmployee, updateEmployee };
