import "./UserTable.css";
import UserRow from "./UserRow";

const UserTable = ({
  users,
  onEdit,
  onDelete,
  sortField,
  sortOrder,
  handleSort,
}) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th onClick={() => handleSort("firstName")}>
              First Name {sortField === "firstName" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("lastName")}>
              Last Name {sortField === "lastName" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("email")}>
              Email {sortField === "email" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("department")}>
              Department {sortField === "department" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {users.length > 0 ? (
            users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6">
                No Users Found
              </td>
            </tr>
          )}

        </tbody>

      </table>
    </div>
  );
};

export default UserTable;