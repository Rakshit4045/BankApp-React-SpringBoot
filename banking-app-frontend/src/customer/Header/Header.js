import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [username, setUsername] = useState("username");

  useEffect(() => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    if (user != null) {
      setUsername(user.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-warning">
      <a className="navbar-brand" href="#home">
        RS Bank
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto ">
          <li className="nav-item mx-2">
            <Link to={"/customer"} className="nav-link">
              <i className="bi bi-house-fill pr-2"></i>
              Home
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link to={"/customer/fundtransfer"} className="nav-link">
              <i className="bi bi-arrow-left-right pr-2"></i>
              Fund Transfer
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link to={"/customer/balanceenquiry"} className="nav-link">
              <b>
                <i className="bi bi-wallet pr-2"></i>
              </b>
              Balance Enquiry
            </Link>
          </li>
          <li className="nav-item dropdown mx-2">
            <a
              className="nav-link dropdown-toggle"
              href="#home"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-arrow-left-right pr-2"></i>
              Bank Statement
            </a>
            <div
              className="dropdown-menu bg-warning"
              aria-labelledby="navbarDropdown"
            >
              <Link to={"/customer/ministatement"} className="dropdown-item">
                <b>
                  <i className="bi bi-box-arrow-in-left pr-2"></i>
                </b>
                Mini Statement
              </Link>
              <Link
                to={"/customer/customizedstatement"}
                className="dropdown-item"
              >
                <b>
                  <i className="bi bi-box-arrow-in-right pr-2"></i>
                </b>
                Customized Statement
              </Link>
            </div>
          </li>
        </ul>
        <>
          <div className="profile">
            <i className="bi bi-person-circle px-1"></i>
            <p className="m-0 pr-1">{username}</p>
          </div>
          <Link to={"/"}>
            <button
              className="btn btn-primary px-2 login-btn"
              onClick={handleLogout}
            >
              LogOut
            </button>
          </Link>
        </>
      </div>
    </nav>
  );
}
