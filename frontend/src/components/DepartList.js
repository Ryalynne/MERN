import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function DepartList() {
  const [dept, setDept] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users/getDept");
    setDept(response.data);
  };

  return (
    <div>
      <Navbar />
      <div className="column container">
        <Link to={`/AddDepartment`} className="button is-success ml-3">
          Add Department
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Department ID</th>
              <th>Department Name</th>
            </tr>
          </thead>
          <tbody>
            {dept.map((user, index) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.Department_Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepartList;
