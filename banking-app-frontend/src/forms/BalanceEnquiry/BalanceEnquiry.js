import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Store } from "react-notifications-component";
import useForm from "../../hooks/useForm";

const callApi = async (url) => {
  let check = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return false;
    });

  return check;
};

export default function BalanceEnqiry() {
  const { handleChange, values, errors } = useForm();
  const [balance, setBalance] = useState(null);
  const { pathname } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = JSON.parse(window.localStorage.getItem("user"));
    const getData = await callApi(
      pathname === "/manager/balanceenquiry"
        ? "http://localhost:8080/api/v1/account/" +
            values.accountnumber +
            "/manager/" +
            user.managerId
        : "http://localhost:8080/api/v1/account/" +
            values.accountnumber +
            "/customer/" +
            user.customerId
    );
    setBalance(getData.initialDeposit);
    if (!getData) {
      Store.addNotification({
        title: "Invalid Account Number",
        message:
          "Account Number does not exists. Please Enter right Account Number",
        type: "info",
        container: "top-center",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
        },
      });
    }
  };

  return (
    <>
      <h3 className="my-4">Balance Enquiry</h3>
      <form className="container my-3 text-left" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col mb-3">
            <label htmlFor="validationCustom03">Account Number</label>
            <input
              name="accountnumber"
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="Please Enter Account Number"
              onChange={handleChange}
              required
            />
            <small>
              {errors.customerId && (
                <p className="form-err-msg">{errors.customerId}</p>
              )}
            </small>
          </div>
        </div>
        <div className="form-row">
          <button className="btn btn-danger m-2">Reset</button>
          <button className="btn btn-success m-2">Submit</button>
        </div>
      </form>
      <h1>
        {balance === null || balance === undefined
          ? "Please Enter your Account Number"
          : "Your Balance: " + balance}
      </h1>
    </>
  );
}
