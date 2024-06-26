/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("employees", (table) => {
    table.increments("id").primary();
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.date("date_of_birth").notNullable();
    table.string("company_email", 255).notNullable().unique();
    table.string("personal_email", 255).unique();
    table.string("phone_number", 20).notNullable();
    table.string("address", 255).notNullable();
    table.date("hire_date").notNullable();
    table.decimal("salary", 15, 2).notNullable();
    table.string("bank_name", 255).notNullable();
    table.string("bank_account_number", 50).notNullable();
    table.string("bank_sort_code", 20).notNullable();
    table.string("BVN", 11).notNullable();
    table.string("tax_id", 50).notNullable();
    table.string("pension_id", 50).notNullable();
    table.integer("current_state_id").unsigned().notNullable();
    table.integer("current_pfa").unsigned().notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("employees");
}
