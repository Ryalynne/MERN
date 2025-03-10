import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/Employee/UserList";
import AddUser from "./components/Employee/AddUser";
import EditUser from "./components/Employee/EditUser";
import AddJob  from "./components/JobTitle/AddJob";
import AddSalary  from "./components/Salary/AddSalary";
import JobList from "./components/JobTitle/JobList";
import SalaryList from "./components/Salary/SalaryList";
import EditSalary from "./components/Salary/EditSalary";
import EditJob from "./components/JobTitle/EditJob";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="AddSalary" element={<AddSalary/>}/>
        <Route path="AddEmployee" element={<AddUser/>}/>
        <Route path="AddJob" element={<AddJob/>}/>
        <Route path="editJobTitle/:id" element={<EditJob/>}/>
        <Route path="editSalary/:id" element={<EditSalary/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
        <Route path="/" element={<UserList/>}/>
        <Route path="JobTitleList" element={<JobList/>}/>
        <Route path="SalaryList" element={<SalaryList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
