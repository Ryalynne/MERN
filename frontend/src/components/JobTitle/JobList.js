import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
function DepartList() {
  const [dept, setDept] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/job");
    setDept(response.data);
  };

  return (
    <div>
      <Navbar />
      <div className="column container">
        <Link to={`/AddJob`} className="button is-success ml-3">
          Add Job Title
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Job Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dept.map((user, index) => (
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
                  <button className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepartList;
