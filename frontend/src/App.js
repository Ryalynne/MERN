import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import AddDept  from "./components/AddDept";
import AddSalary from "./components/AddSalary";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="department" element={<AddDept/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
        <Route path="salary" element={<AddSalary/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
