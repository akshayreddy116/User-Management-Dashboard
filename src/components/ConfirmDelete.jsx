import "./ConfirmDelete.css";

const ConfirmDelete = ({
  user,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="modal">
      <div className="delete-box">

        <h3>Delete User</h3>
        <p>
          Are you sure you want to delete
          <strong> {user.firstName}</strong>?
        </p>

        <div className="buttons">

          <button className="delete" onClick={() => onConfirm(user.id)} >
            Delete
          </button>

          <button className="cancel" onClick={onCancel} >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;