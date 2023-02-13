import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="text-center bg-warning text-lg-start text-black">
      <section className="pt-1">
        <div className="container text-left text-md-start mt-5">
          <div className="row mt-2">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 font-weight-bold">
                Customer
              </h6>
              <p>
                <Link to="/manager/addcustomer" className="text-reset">
                  New Customer
                </Link>
              </p>
              <p>
                <Link to="/manager/editcustomer" className="text-reset">
                  Edit Customer
                </Link>
              </p>
              <p>
                <Link to="/manager/deletecustomer" className="text-reset">
                  Delete Customer
                </Link>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 font-weight-bold">
                Account
              </h6>
              <p>
                <Link to="/manager/addaccount" className="text-reset">
                  New Account
                </Link>
              </p>
              <p>
                <Link to="/manager/editaccount" className="text-reset">
                  Edit Account
                </Link>
              </p>
              <p>
                <Link to="/manager/deleteaccount" className="text-reset">
                  Delete Account
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 font-weight-bold">
                Transaction
              </h6>
              <p>
                <Link to="/manager/deposit" className="text-reset">
                  Deposit
                </Link>
              </p>
              <p>
                <Link to="/manager/withdrawal" className="text-reset">
                  Withdrawal
                </Link>
              </p>
              <p>
                <Link to="/manager/fundtransfer" className="text-reset">
                  Fund Transfer
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 font-weight-bold">
                Bank Statement
              </h6>
              <p>
                <Link to="/manager/ministatement" className="text-reset">
                  Mini Statement
                </Link>
              </p>
              <p>
                <Link to="/manager/customizedstatement" className="text-reset">
                  Customized Statement
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-warning">
        <div className="footer-content py-3 navbar navbar-expand-sm text-align-left">
          <Link
            to="#home"
            className="text-decoration-none text-dark footer-logo"
          >
            RS Bank
          </Link>
          <ul>
            <li className="list-inline-item social-icons">
              {" "}
              <Link to="#home">
                {" "}
                <i className="bi bi-facebook"> </i>{" "}
              </Link>{" "}
            </li>
            <li className="list-inline-item social-icons">
              {" "}
              <Link to="#home">
                {" "}
                <i className="bi bi-instagram"> </i>{" "}
              </Link>{" "}
            </li>
            <li className="list-inline-item social-icons">
              {" "}
              <Link to="#home">
                {" "}
                <i className="bi bi-twitter"> </i>{" "}
              </Link>{" "}
            </li>
            <li className="list-inline-item social-icons">
              {" "}
              <Link to="#home">
                {" "}
                <i className="bi bi-linkedin"> </i>{" "}
              </Link>{" "}
            </li>
          </ul>
          <div style={{ width: "33%" }}>© 2022 Copyright, RS Bank</div>
        </div>
      </div>
    </footer>
  );
}
