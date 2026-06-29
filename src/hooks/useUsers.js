import { useEffect, useState } from "react";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../api/userService";

import { mapUsers } from "../utils/helpers";
const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState("");
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const data = await getUsers();

      setUsers(mapUsers(data));
    } catch {
      setError(
        "Failed to fetch users."
      );
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (user) => {
    try {
        const created = await createUser(user);
        setUsers((prevUsers) => {
            const maxId = Math.max(
                ...prevUsers.map((u) => u.id),0
            );

        return [
            {
            ...created,
            id: maxId + 1,
            },
            ...prevUsers,
        ];
        });
    } catch {
        setError("Unable to create user.");
    }
};

  const editUser = async (user) => {
    try {
      await updateUser(user.id, user);

      setUsers((prev) =>
        prev.map((u) =>
          u.id === user.id ? user : u
        )
      );
    } catch {
      setError(
        "Unable to update user."
      );
    }
  };

  const removeUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prev) =>
        prev.filter((u) => u.id !== id)
      );
    } catch {
      setError(
        "Unable to delete user."
      );
    }
  };

  return {
    users,
    loading,
    error,
    addUser,
    editUser,
    removeUser,
  };
};

export default useUsers;
