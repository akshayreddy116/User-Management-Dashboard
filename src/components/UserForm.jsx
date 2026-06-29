import { useEffect, useState } from "react";
import "./UserForm.css";
import {validateUser} from "../utils/validators";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  department: "IT",
};

const UserForm = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const validate = () => {
    const err = validateUser(formData);
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="form-container">
        <h2>{user ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="First Name" value={formData.firstName}
            onChange={(e) =>
              setFormData({
                ...formData,
                firstName: e.target.value,
              })
            }
          />
          <small>{errors.firstName}</small>

          <input placeholder="Last Name" value={formData.lastName}
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName: e.target.value,
              })
            }
          />
          <small>{errors.lastName}</small>

          <input placeholder="Email" value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
          <small>{errors.email}</small>

          <select value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department: e.target.value,
              })
            }
          >
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>

          <div className="buttons">
            <button type="submit"> Save </button>
            <button type="button" className="cancel" onClick={onClose} >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;