import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function SalaryList() {
  const [salaries, setSalary] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get(
      "http://localhost:5000/users/getSalaryList"
    );
    setSalary(response.data);
  };

  return (
    <div>
      <Navbar />
      <div className="column container">
        <Link to={`/AddSalary`} className="button is-success ml-3">
          Add Salary
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Salary ID</th>
              <th>Department Name</th>
              <th>Position</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((user, index) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.Department_Name}</td>
                <td>{user.position}</td>
                <td>
                  {user.salary
                    ? `₱${parseFloat(user.salary).toLocaleString("en-PH", {
                        minimumFractionDigits: 2,
                      })}`
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalaryList;
