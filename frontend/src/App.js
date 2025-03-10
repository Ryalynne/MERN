import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import AddDept  from "./components/AddDept";
import AddSalary  from "./components/AddSalary";
import DepartList from "./components/DepartList";
import SalaryList from "./components/SalaryList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="SalaryList/salary" element={<AddSalary/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="deptList/department" element={<AddDept/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
        <Route path="/" element={<UserList/>}/>
        <Route path="deptList" element={<DepartList/>}/>
        <Route path="salaryList" element={<SalaryList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
