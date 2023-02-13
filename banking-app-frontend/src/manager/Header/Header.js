import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [username, setUsername] = useState("username");

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user != null) {
      setUsername(user.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
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
          {/* <li className="nav-item ">
                    <a className="nav-link" href="#home">
                        
                    </a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="#contactus">
                        
                    </a>
                </li> */}
          <li className="nav-item mx-2">
            <Link to={"/manager"} className="nav-link">
              <i className="bi bi-house-fill pr-2"></i>
              Home
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
              <i className="bi bi-people-fill pr-2"></i>
              Customer
            </a>
            <div
              className="dropdown-menu bg-warning"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item " to="/manager/addcustomer">
                <i className="bi bi-person-plus-fill pr-2"></i>
                New Customer
              </Link>
              <Link to={"/manager/editcustomer"} className="dropdown-item">
                <i className="bi bi-person-check-fill pr-2"></i>
                Edit Customer
              </Link>
              <Link
                to={"/manager/deletecustomer"}
                className="dropdown-item "
                href="#home"
              >
                <i className="bi bi-person-dash-fill pr-2"></i>
                Delete Customer
              </Link>
            </div>
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
              <i className="bi bi-credit-card-fill pr-2"></i>
              Account
            </a>
            <div
              className="dropdown-menu bg-warning"
              aria-labelledby="navbarDropdown"
            >
              <Link to={"/manager/addaccount"} className="dropdown-item">
                <i className="bi bi-plus-circle-fill pr-2"></i>
                New Account
              </Link>
              <Link to={"/manager/editaccount"} className="dropdown-item">
                <i className="bi bi-pencil-square pr-2"></i>
                Edit Account
              </Link>
              <Link
                to={"/manager/deleteaccount"}
                className="dropdown-item "
                href="#home"
              >
                <i className="bi bi-trash-fill pr-2"></i>
                Delete Account
              </Link>
            </div>
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
              Transaction
            </a>
            <div
              className="dropdown-menu bg-warning"
              aria-labelledby="navbarDropdown"
            >
              <Link to={"/manager/deposit"} className="dropdown-item">
                <b>
                  <i className="bi bi-box-arrow-in-left pr-2"></i>
                </b>
                Deposit
              </Link>
              <Link
                to={"/manager/withdrawal"}
                className="dropdown-item "
                href="#home"
              >
                <b>
                  <i className="bi bi-box-arrow-in-right pr-2"></i>
                </b>
                Withdrawal
              </Link>
              <Link
                to={"/manager/fundtransfer"}
                className="dropdown-item "
                href="#home"
              >
                <b>
                  <i className="bi bi-shuffle pr-2"></i>
                </b>
                Fund Transfer
              </Link>
            </div>
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
              <Link to={"/manager/ministatement"} className="dropdown-item">
                <b>
                  <i className="bi bi-box-arrow-in-left pr-2"></i>
                </b>
                Mini Statement
              </Link>
              <Link
                to={"/manager/customizedstatement"}
                className="dropdown-item"
              >
                <b>
                  <i className="bi bi-box-arrow-in-right pr-2"></i>
                </b>
                Customized Statement
              </Link>
              <Link to={"/manager/balanceenquiry"} className="dropdown-item">
                <b>
                  <i className="bi bi-wallet pr-2"></i>
                </b>
                Balance Enquiry
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
