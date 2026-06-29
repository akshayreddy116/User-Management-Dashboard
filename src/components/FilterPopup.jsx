import "./FilterPopup.css";

const FilterPopup = ({ filters, setFilters, onClose }) => {
  return (
    <div className="modal">
      <div className="filter-box">
        <div className="filter-header">
          <h2>Filters</h2>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>
        
        <input
          placeholder="First Name"
          value={filters.firstName}
          onChange={(e) =>
            setFilters({
              ...filters,
              firstName: e.target.value,
            })
          }
        />

        <input
          placeholder="Last Name"
          value={filters.lastName}
          onChange={(e) =>
            setFilters({
              ...filters,
              lastName: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          value={filters.email}
          onChange={(e) =>
            setFilters({
              ...filters,
              email: e.target.value,
            })
          }
        />

        {/* Dropdown */}
        <select
          value={filters.department}
          onChange={(e) =>
            setFilters({
              ...filters,
              department: e.target.value,
            })
          }
        >
          <option value="">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>

        {/* Apply button */}
        <button className="apply-btn" onClick={onClose}>
          Apply Filters
        </button>

      </div>
    </div>
  );
};

export default FilterPopup;