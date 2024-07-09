export const validateEmployeeData = (data) => {
  const errors = [];

  if (
    !data.first_name ||
    typeof data.first_name !== "string" ||
    data.first_name.length > 255
  ) {
    errors.push("Invalid or missing 'first_name'");
  }
  if (
    !data.last_name ||
    typeof data.last_name !== "string" ||
    data.last_name.length > 255
  ) {
    errors.push("Invalid or missing 'last_name'");
  }
  if (data.date_of_birth && isNaN(Date.parse(data.date_of_birth))) {
    errors.push("Invalid 'date_of_birth'");
  }

  if (
    data.company_email &&
    (typeof data.company_email !== "string" || data.company_email.length > 255)
  ) {
    errors.push("Invalid 'company_email'");
  }
  if (
    data.personal_email &&
    (typeof data.personal_email !== "string" ||
      data.personal_email.length > 255)
  ) {
    errors.push("Invalid 'personal_email'");
  }
  if (
    data.phone_number &&
    (typeof data.phone_number !== "string" || data.phone_number.length > 20)
  ) {
    errors.push("Invalid 'phone_number'");
  }
  if (
    data.address &&
    (typeof data.address !== "string" || data.address.length > 255)
  ) {
    errors.push("Invalid 'address'");
  }
  if (!data.join_date || isNaN(Date.parse(data.join_date))) {
    errors.push("Invalid or missing 'join_date'");
  }
  if (data.exit_date && isNaN(Date.parse(data.exit_date))) {
    errors.push("Invalid 'exit_date'");
  }
  if (typeof data.status !== "string" || data.status.length > 255) {
    errors.push("Invalid 'status'");
  }
  if (
    !data.gross_monthly_salary ||
    typeof data.gross_monthly_salary !== "number"
  ) {
    errors.push("Invalid or missing 'gross_monthly_salary'");
  }
  if (
    data.bank_name &&
    (typeof data.bank_name !== "string" || data.bank_name.length > 255)
  ) {
    errors.push("Invalid 'bank_name'");
  }
  if (
    data.bank_account_number &&
    (typeof data.bank_account_number !== "string" ||
      data.bank_account_number.length > 50)
  ) {
    errors.push("Invalid 'bank_account_number'");
  }
  if (
    data.bank_sort_code &&
    (typeof data.bank_sort_code !== "string" || data.bank_sort_code.length > 20)
  ) {
    errors.push("Invalid 'bank_sort_code'");
  }
  if (data.BVN && (typeof data.BVN !== "string" || data.BVN.length !== 11)) {
    errors.push("Invalid 'BVN'");
  }
  if (
    data.tax_id &&
    (typeof data.tax_id !== "string" || data.tax_id.length > 50)
  ) {
    errors.push("Invalid 'tax_id'");
  }
  if (
    data.pension_id &&
    (typeof data.pension_id !== "string" || data.pension_id.length > 50)
  ) {
    errors.push("Invalid 'pension_id'");
  }
  if (data.current_state_id && !Number.isInteger(data.current_state_id)) {
    errors.push("Invalid 'current_state_id'");
  }
  if (data.current_pfa && !Number.isInteger(data.current_pfa)) {
    errors.push("Invalid id 'current_pfa'");
  }

  return errors;
};
