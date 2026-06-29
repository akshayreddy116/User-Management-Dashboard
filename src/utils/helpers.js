import { DEPARTMENTS } from "./constants";

export const mapUsers = (users) => {
  return users.map((user, index) => {
    const names = user.name.split(" ");

    return {
      id: user.id,
      firstName: names[0] || "",
      lastName: names.slice(1).join(" "),
      email: user.email,
      department:
        DEPARTMENTS[index % DEPARTMENTS.length],
    };
  });
};

export const sortUsers = (
  users,
  field,
  order
) => {
  return [...users].sort((a, b) => {
    const A = a[field].toString().toLowerCase();
    const B = b[field].toString().toLowerCase();

    return order === "asc"
      ? A.localeCompare(B)
      : B.localeCompare(A);
  });
};