import{ useState } from "react";
import "../App.css";
import inno from "../assets/icon.png";

function Navbar() {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const navbarStyle = {
    boxShadow: isNavbarCollapsed ? "0px 1px 5px rgba(0, 0, 0, 0.1)" : "none",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: "25px" }}>
            <img
              src={inno}
              alt="Inno"
              height="45"
              className="d-inline-block align-top"
            />
            InnoByte
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavbarCollapsed ? "" : "show"
            }`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav m-auto">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Service
              </a>
              <a className="nav-link" href="#">
                About Us
              </a>
              <a className="nav-link" aria-disabled="true">
                Portfolio
              </a>
            </div>
            <a className="btn btn-primary ml-auto">
                Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
