import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import "./App.css";
import LandingPage from "./landing/LandingPage/LandingPage";
import Login from "./common/login/Login";
import ChangePassword from "./common/changepassword/ChangePassword";
import ManagerPage from "./manager/ManagerPage/ManagerPage";
import CreateCustomer from "./forms/CreateCustomer/CreateCustomer";
import CreateAccount from "./forms/CreateAccount/CreateAccount";
import Transaction from "./forms/Transaction/Transaction";
import FundTransfer from "./forms/FundTransfer/FundTransfer";
import EditCustomer from "./forms/EditCustomer/EditCustomer";
import CustomerPage from "./customer/CustomerPage/CustomerPage";
import BalanceEnqiry from "./forms/BalanceEnquiry/BalanceEnquiry";
import MiniStatement from "./forms/MiniStatement/MiniStatement";
import CustomizedStatement from "./forms/CustomizedStatement/CustomizedStatement";
import ErrorPage from "./ErrorPage";
import Delete from "./common/Delete/Delete";
import Main from "./manager/Main/Main";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          {["/login", "/admin"].map((path, index) => (
            <Route path={path} element={<Login />} key={index}></Route>
          ))}
          <Route
            path="/login/changepassword"
            element={<ChangePassword />}
          ></Route>
          <Route
            path="/admin/changepassword"
            element={<ChangePassword />}
          ></Route>
          <Route exact path="/customer" element={<CustomerPage />}>
            <Route path="fundtransfer" element={<FundTransfer />}></Route>
            <Route path="balanceenquiry" element={<BalanceEnqiry />}></Route>
            <Route path="ministatement" element={<MiniStatement />}></Route>
            <Route
              path="customizedstatement"
              element={<CustomizedStatement />}
            ></Route>
          </Route>
          <Route exact path="/manager" element={<ManagerPage />}>
            <Route path="" element={<Main />}></Route>
            <Route path="addcustomer" element={<CreateCustomer />}></Route>
            {["editcustomer", "editaccount"].map((path, index) => (
              <Route path={path} element={<EditCustomer />} key={index} />
            ))}
            <Route path="addaccount" element={<CreateAccount />}></Route>
            {["deposit", "withdrawal"].map((path, index) => (
              <Route path={path} element={<Transaction />} key={index} />
            ))}
            {["deletecustomer", "deleteaccount"].map((path, index) => (
              <Route path={path} element={<Delete />} key={index} />
            ))}
            <Route path="fundtransfer" element={<FundTransfer />}></Route>
            <Route path="balanceenquiry" element={<BalanceEnqiry />}></Route>
            <Route path="ministatement" element={<MiniStatement />}></Route>
            <Route
              path="customizedstatement"
              element={<CustomizedStatement />}
            ></Route>
          </Route>
          <Route exact path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
