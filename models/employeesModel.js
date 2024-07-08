import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export async function getAllEmployees(limit, offset) {
  try {
    return await knex("employees")
      .select("id", "first_name", "last_name", "company_email")
      .limit(limit)
      .offset(offset);
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
  try {
    const [newEmployee] = await knex("employees")
      .insert(employeeData)
      .returning(["id", "name", "email"]);
    return newEmployee;
  } catch (error) {
    console.error("Error creating employee:", error);
    return false;
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
