# 👥 User Management Dashboard

A responsive **User Management Dashboard** built with **React.js**, **Axios**, and **JSONPlaceholder REST API**. The application allows users to view, search, filter, sort, add, edit, and delete user records while maintaining a clean, responsive UI.

---

## 🚀 Live Demo

> Add your deployed link here

```
[Live Demo](https://user-management-dashboard-self-three.vercel.app/)
```

---

## 📂 GitHub Repository

> Add your GitHub repository link here

```
https://github.com/yourusername/user-management-dashboard
```

---

# 📌 Features

✅ View Users

- Fetch users from JSONPlaceholder API
- Display users in a responsive table

✅ Add User

- Create a new user
- Client-side validation
- Simulated POST request

✅ Edit User

- Update existing user information
- Pre-filled edit form
- Simulated PUT request

✅ Delete User

- Confirmation modal before deletion
- Simulated DELETE request

✅ Search

- Search by:
  - First Name
  - Last Name
  - Email

✅ Filter

- Filter users by:
  - First Name
  - Last Name
  - Email
  - Department

✅ Sorting

- Sort users by:
  - First Name
  - Last Name
  - Email
  - Department
- Ascending & Descending order

✅ Pagination

- Page sizes:
  - 5
  - 10
  - 25
  - 50

✅ Responsive Design

- Desktop Table View
- Mobile Card View
- Tablet Optimized Layout

✅ Error Handling

- API request failures
- Form validation
- Friendly error messages

---

# 🛠 Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

### Libraries

- Axios
- React Hooks
- React Icons

### API

JSONPlaceholder

```
https://jsonplaceholder.typicode.com/users
```

---

# 📁 Folder Structure

```
user-management-dashboard/
│

│   
│
├── src/
│
│   ├── api/
│   │   └── userService.js          # Axios API calls (GET, POST, PUT, DELETE)
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   │
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.css
│   │   │
│   │   ├── UserTable.jsx
│   │   ├── UserTable.css
│   │   │
│   │   ├── UserRow.jsx
│   │   │
│   │   ├── Pagination.jsx
│   │   ├── Pagination.css
│   │   │
│   │   ├── UserForm.jsx
│   │   ├── UserForm.css
│   │   │
│   │   ├── FilterPopup.jsx
│   │   ├── FilterPopup.css
│   │   │
│   │   ├── ConfirmDelete.jsx
│   │   └── ConfirmDelete.css
│   │
│   ├── hooks/
│   │   └── useUsers.js             # Custom hook for user CRUD logic
│   │
│   ├── utils/
│   │   ├── constants.js            # Departments, page sizes, sort fields
│   │   ├── helpers.js              # Sorting, formatting, pagination helpers
│   │   └── validators.js           # Form validation
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── App.jsx                     # Main controller component
│   ├── App.css                     # Global application styles
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── index.html
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/akshayreddy116/user-management-dashboard.git
```

Go to project directory

```bash
cd user-management-dashboard
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 🌐 API Endpoints Used

### Get Users

```
GET /users
```

### Add User

```
POST /users
```

### Update User

```
PUT /users/:id
```

### Delete User

```
DELETE /users/:id
```

---

# 🔄 Application Flow

```
Application Starts
        │
        ▼
Fetch Users from API
        │
        ▼
Format User Data
        │
        ▼
Store in React State
        │
        ▼
Search
        │
        ▼
Filter
        │
        ▼
Sort
        │
        ▼
Pagination
        │
        ▼
Display Users
        │
        ▼
CRUD Operations
        │
        ▼
Update Local State
        │
        ▼
Re-render UI
```

---

# ✅ Validation

The application validates:

- Required fields
- Email format
- Empty input fields

Invalid submissions are prevented before sending API requests.

---

# ⚠️ Error Handling

The application handles:

- Network failures
- API request failures
- Invalid form inputs
- Empty search/filter results

User-friendly error messages are displayed instead of breaking the application.

---

# 📌 Assumptions

JSONPlaceholder provides only:

- id
- name
- email

It does **not** provide:

- First Name
- Last Name
- Department

Therefore:

- First Name and Last Name are extracted by splitting the `name` field.
- Department is assigned locally for demonstration purposes.

Since JSONPlaceholder is a mock API:

- POST requests are simulated.
- PUT requests are simulated.
- DELETE requests are simulated.

Changes are maintained only in the application's local state and are not permanently stored on the server.

---

# 🚧 Challenges Faced

- JSONPlaceholder does not persist CRUD operations.
- API contains only 10 users, limiting pagination.
- User data required transformation to match project requirements.
- State synchronization after CRUD operations had to be managed locally.

---

# 🔮 Future Improvements

- Backend with persistent database
- User Authentication & Authorization
- Server-side Pagination
- Advanced Filtering
- Multi-column Sorting
- Export to CSV/PDF
- Dark Mode
- Unit & Integration Testing
- Role-based Access Control
- Docker Deployment

---



---

# 👨‍💻 Author

**Akshay Reddy**

GitHub: https://github.com/akshayreddy116

---

# 📄 License

This project is developed for learning and assessment purposes.
