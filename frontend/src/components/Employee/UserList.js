import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesToShow, setEntriesToShow] = useState(10); // Default: Show 10 entries

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    `${user.full_name} ${user.email} ${user.Job_Title} ${user.position} ${user.id}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Limit displayed entries based on selection
  const displayedUsers = filteredUsers.slice(0, entriesToShow);

  return (
    <div>
      <div className="column container mt-5">
        {/* Search Bar and Add Employee Button */}
        <div className="is-flex is-justify-content-space-between mb-3">
          <input
            type="text"
            className="input"
            style={{ maxWidth: "300px" }}
            placeholder="Search by Employee ID, Name, Email, Job Title, or Position..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to={`AddEmployee`} className="button is-success ml-3">
            Add Employee
          </Link>
        </div>

        {/* Employee Table */}
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Job Title</th>
              <th>Position / Level</th>
              <th>Salary</th>
              <th>Annual Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.full_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.Job_Title}</td>
                <td>{user.position}</td>
                <td>
                  {user.salary
                    ? `₱${parseFloat(user.salary).toLocaleString("en-PH", {
                        minimumFractionDigits: 2,
                      })}`
                    : ""}
                </td>
                <td>
                  {user.anual_salary
                    ? `₱${parseFloat(user.anual_salary).toLocaleString(
                        "en-PH",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}`
                    : ""}
                </td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer with Entry Filter */}
        <div className="is-flex is-align-items-center is-justify-content-space-between mt-3">
          <div>
            <label className="mr-2">Show entries:</label>
            <div className="select">
              <select
                value={entriesToShow}
                onChange={(e) => setEntriesToShow(Number(e.target.value))}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value={filteredUsers.length}>All</option>
              </select>
            </div>
          </div>
          <p>
            Showing {displayedUsers.length} of {filteredUsers.length} entries
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserList;
