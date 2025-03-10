import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DepartList() {
  const [dept, setDept] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesToShow, setEntriesToShow] = useState(10); // Default: Show 10 entries

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/job");
    setDept(response.data);
  };

  // Filter jobs based on search term
  const filteredJobs = dept.filter((job) =>
    job.Job_Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limit displayed entries based on selection
  const displayedJobs = filteredJobs.slice(0, entriesToShow);

  return (
    <div>
      <div className="column container mt-5">
        {/* Search and Add Button Container */}
        <div className="is-flex is-justify-content-space-between mb-3">
          <input
            type="text"
            className="input"
            style={{ maxWidth: "300px" }}
            placeholder="Search Job Title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to={`/AddJob`} className="button is-success ml-3">
            Add Job Title
          </Link>
        </div>

        {/* Job List Table */}
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Job Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedJobs.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.Job_Title}</td>
                <td>
                  <Link
                    to={`/editJobTitle/${user.id}`}
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
                <option value={filteredJobs.length}>All</option>
              </select>
            </div>
          </div>
          <p>
            Showing {displayedJobs.length} of {filteredJobs.length} entries
          </p>
        </div>
      </div>
    </div>
  );
}

export default DepartList;
