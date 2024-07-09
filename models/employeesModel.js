import initKnex from "knex";
import configuration from "../knexfile.js";
import { validateEmployeeData } from "../utilities/employeeValidation.js";
const knex = initKnex(configuration);

export async function getAllEmployees(limit, offset) {
  try {
    return await knex("employees").select("*").limit(limit).offset(offset);
  } catch (error) {
    console.error("Error fetching all employees:", error);
    return false;
  }
}

export async function getAllEmployee() {
  try {
    return await knex("employees").select("*");
  } catch (error) {
    console.error("Error fetching all employees:", error);
    return false;
  }
}

export async function getSingleEmployee(id) {
  try {
    return await knex("employees").where({ id }).first();
  } catch (error) {
    console.error(`Error fetching employee with id ${id}:`, error);
    return false;
  }
}

export async function createSingleEmployee(employeeData) {
  const validationErrors = validateEmployeeData(employeeData);

  if (validationErrors.length > 0) {
    console.error("Validation error:", validationErrors);
    return { success: false, message: validationErrors.join(", ") };
  }

  const cleanedEmployeeData = {
    ...employeeData,
    date_of_birth: employeeData.date_of_birth || null,
    exit_date: employeeData.exit_date || null,
  };

  try {
    await knex("employees").insert(cleanedEmployeeData);

    const newEmployee = await knex("employees")
      .where({
        first_name: cleanedEmployeeData.first_name,
        last_name: cleanedEmployeeData.last_name,
        join_date: cleanedEmployeeData.join_date,
      })
      .first();
    return { success: true, data: newEmployee };
  } catch (error) {
    console.error("Error creating employee:", error);
    return { success: false, message: "Error creating employee", error };
  }
}

export async function updateSingleEmployee(id, employeeData) {
  try {
    const [updatedEmployee] = await knex("employees")
      .where({ id })
      .update(employeeData)
      .returning("id", "first_name", "last_name", ...Object.keys(employeeData));
    return updatedEmployee;
  } catch (error) {
    console.error(`Error updating employee with id ${id}:`, error);
    return false;
  }
}
