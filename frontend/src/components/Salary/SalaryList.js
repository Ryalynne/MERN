import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function SalaryList() {
  const [salaries, setSalary] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesToShow, setEntriesToShow] = useState(10); // Default: Show 10 entries

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/salary");
    setSalary(response.data);
  };

  // Filter salaries based on search term
  const filteredSalaries = salaries.filter((user) =>
    `${user.Job_Title} ${user.position}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Limit displayed entries based on selection
  const displayedSalaries = filteredSalaries.slice(0, entriesToShow);

  return (
    <div>
      <div className="column container mt-5">
        {/* Search Bar and Add Salary Button */}
        <div className="is-flex is-justify-content-space-between mb-3">
          <input
            type="text"
            className="input"
            style={{ maxWidth: "300px" }}
            placeholder="Search by Job Title or Position..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to={`/AddSalary`} className="button is-success ml-3">
            Add Salary
          </Link>
        </div>

        {/* Salary Table */}
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Salary ID</th>
              <th>Job Title</th>
              <th>Position / Level</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedSalaries.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
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
                  <Link
                    to={`/editSalary/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
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
                <option value={filteredSalaries.length}>All</option>
              </select>
            </div>
          </div>
          <p>
            Showing {displayedSalaries.length} of {filteredSalaries.length}{" "}
            entries
          </p>
        </div>
      </div>
    </div>
  );
}

export default SalaryList;
