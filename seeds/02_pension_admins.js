/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("pension_admins").del();
  await knex("pension_admins").insert([
    {
      name: "ARM Pension Managers",
      email: "contact@armpension.com",
      address: "Lagos, Nigeria",
    },
    {
      name: "Stanbic IBTC Pension Managers",
      email: "info@stanbicibtcpension.com",
      address: "Lagos, Nigeria",
    },
    {
      name: "Premium Pension Limited",
      email: "info@premiumpension.com",
      address: "Abuja, Nigeria",
    },
    {
      name: "Leadway Pensure PFA",
      email: "info@leadway-pensure.com",
      address: "Lagos, Nigeria",
    },
    {
      name: "CrusaderSterling Pensions",
      email: "info@crusaderpensions.com",
      address: "Lagos, Nigeria",
    },
    {
      name: "Fidelity Pension Managers",
      email: "info@fidelitypensionmanagers.com",
      address: "Lagos, Nigeria",
    },
    {
      name: "First Guarantee Pension Limited",
      email: "info@firstguaranteepension.com",
      address: "Lagos, Nigeria",
    },
    {
      name: "Sigma Pensions",
      email: "info@sigmapensions.com",
      address: "Abuja, Nigeria",
    },
    {
      name: "Trustfund Pensions",
      email: "info@trustfundpensions.com",
      address: "Abuja, Nigeria",
    },
    {
      name: "NLPC Pension Fund Administrators",
      email: "info@nlpcpfa.com",
      address: "Lagos, Nigeria",
    },
  ]);
}
