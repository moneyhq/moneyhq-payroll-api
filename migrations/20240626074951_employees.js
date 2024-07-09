/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("employees", (table) => {
    table.increments("id").primary();
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.date("date_of_birth");
    table.string("company_email", 255).unique();
    table.string("personal_email", 255).unique();
    table.string("phone_number", 20);
    table.string("address", 255);
    table.date("join_date").notNullable();
    table.date("exit_date").defaultTo(null);
    table.string("status").notNullable().defaultTo("active");
    table.decimal("gross_monthly_salary", 15, 2).notNullable();
    table.string("bank_name", 255);
    table.string("bank_account_number", 50);
    table.string("bank_sort_code", 20);
    table.string("BVN", 11);
    table.string("tax_id", 50);
    table.string("pension_id", 50);
    table.integer("current_state_id").unsigned();
    table.integer("current_pfa").unsigned();
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
