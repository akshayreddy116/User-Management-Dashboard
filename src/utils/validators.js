export const validateUser = (formdata) => {
  const errors = {};

  if (!formdata.firstName.trim())
    errors.firstName = "First Name is required";

  if (!formdata.lastName.trim())
    errors.lastName = "Last Name is required";

  if (!formdata.email.trim())
    errors.email = "Email is required";
  else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formdata.email
    )
  )
    errors.email = "Invalid Email";

  if (!formdata.department)
    errors.department =
      "Department is required";

  return errors;
};