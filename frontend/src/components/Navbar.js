import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="title is-4">MERN</h1>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/DepartmentList"
            className={({ isActive }) =>
              isActive ? "navbar-item is-active" : "navbar-item"
            }
          >
            Department
          </NavLink>
          <NavLink
            to="/SalaryList"
            className={({ isActive }) =>
              isActive ? "navbar-item is-active" : "navbar-item"
            }
          >
            Salary
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-item is-active" : "navbar-item"
            }
          >
            Employee
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
