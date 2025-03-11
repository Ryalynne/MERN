import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "is-dark" : "is-light"}`}>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1
            className={`title is-4 ${
              isDarkMode ? "has-text-white" : "has-text-black"
            }`}
          >
            MERN
          </h1>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/JobTitleList"
            className={({ isActive }) =>
              isActive ? "navbar-item is-active" : "navbar-item"
            }
          >
            JobTitle
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
        <div className="navbar-end mt-3 mr-5">
          <button
            className="button is-small is-primary is-light"
            onClick={toggleTheme}
          >
            {isDarkMode ? "  Light Mode" : " Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
