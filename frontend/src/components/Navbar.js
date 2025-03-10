import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <h1 className="navbar-item title is-4">MERN</h1>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/deptList" className="navbar-item">
            Department
          </Link>
          <Link to="/salaryList" className="navbar-item">
            Salary
          </Link>
          <Link to="/" className="navbar-item">
            Employee
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
