import { useMemo, useState } from "react";
import "./App.css";
import useUsers from "./hooks/useUsers";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";
import UserForm from "./components/UserForm";
import ConfirmDelete from "./components/ConfirmDelete";
import FilterPopup from "./components/FilterPopup";
import { sortUsers } from "./utils/helpers";

function App() {
  const { users, loading, error, addUser, editUser, removeUser } = useUsers();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const [sortField, setSortField] = useState("firstName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [openForm, setOpenForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);


  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesSearch =
        u.firstName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        u.lastName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        u.email
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilters =
        (!filters.firstName ||
          u.firstName
            .toLowerCase()
            .includes(
              filters.firstName.toLowerCase()
            )) &&
        (!filters.lastName ||
          u.lastName
            .toLowerCase()
            .includes(
              filters.lastName.toLowerCase()
            )) &&
        (!filters.email ||
          u.email
            .toLowerCase()
            .includes(
              filters.email.toLowerCase()
            )) &&
        (!filters.department ||
          u.department ===
            filters.department);

      return (
        matchesSearch && matchesFilters
      );
    });
  }, [users, search, filters]);

  const sortedUsers = useMemo(() => {
    return sortUsers(
      filteredUsers,
      sortField,
      sortOrder
    );
  }, [filteredUsers, sortField, sortOrder]);

  const totalPages = Math.ceil(
    sortedUsers.length / pageSize
  );

  const paginatedUsers = useMemo(() => {
    const start =
      (currentPage - 1) * pageSize;
    return sortedUsers.slice(
      start,
      start + pageSize
    );
  }, [sortedUsers,currentPage,pageSize,]
  );

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(
        sortOrder === "asc"
          ? "desc"
          : "asc"
      );
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleSave = (user) => {
    if (editingUser) {
      editUser(user);
    } else {
      addUser(user);
    }
    setOpenForm(false);
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    removeUser(id);
    setDeleteUser(null);
  };

  return (
    <div className="app-container">
      <Header onAddUser={() => setOpenForm(true)} />
      <div className="toolbar">
        <SearchBar search={search} setSearch={setSearch} />
        <button className="filter-btn"
          onClick={() => setOpenFilter(true) } >
          Filters
        </button>
      </div>
      {error && (
        <div className="error">{error}</div>
      )}

      {loading ? (
        <div className="loading">
          Loading users...
        </div>
      ) : (
        <>
          <UserTable users={paginatedUsers}
            onEdit={(user) => {
              setEditingUser(user);
              setOpenForm(true);
            }}
            onDelete={(user) =>
              setDeleteUser(user)
            }
            sortField={sortField} sortOrder={sortOrder} handleSort={handleSort}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            setPageSize={setPageSize}
            setCurrentPage={
              setCurrentPage
            }
          />
        </>
      )}

      {openForm && (
        <UserForm user={editingUser} onSave={handleSave}
          onClose={() => {
            setOpenForm(false);
            setEditingUser(null);
          }}
        />
      )}
      {deleteUser && (
        <ConfirmDelete
          user={deleteUser}
          onConfirm={handleDelete}
          onCancel={() =>
            setDeleteUser(null)
          }
        />
      )}
      {openFilter && (
        <FilterPopup
          filters={filters}
          setFilters={setFilters}
          onClose={() =>
            setOpenFilter(false)
          }
        />
      )}
    </div>
  );
}
export default App;