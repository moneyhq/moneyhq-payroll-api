/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("ng_states").del();
  await knex("ng_states").insert([
    { states: "Lagos" },
    { states: "FCT-Abuja" },
  ]);
}
