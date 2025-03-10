import React, { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddDept() {
  const [Department_Name, setDept] = useState("");
  const navigate = useNavigate();

  const saveDepartment = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users/addDept", {
        Department_Name,
      });
      navigate("/deptList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveDepartment}>
          <div className="field">
            <label className="label">Department Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Department_Name}
                onChange={(e) => setDept(e.target.value)}
                placeholder="Department Name"
                required
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDept;
