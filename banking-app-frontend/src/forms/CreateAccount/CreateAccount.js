import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Store } from "react-notifications-component";
import useForm from "../../hooks/useForm";
import { addAccountUrl } from "../../URL";
import "./CreateAccount.css";

const callApi = async (url, data) => {
  let AccountData = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log("error: ", err));

  return AccountData;
};

export default function CreateAccount({ editId }) {
  const [methodType, setMethodType] = useState("");
  const { handleChange, values, errors } = useForm();
  const [accountType, setAccountType] = useState();
  const [initialdeposit, setInitialDeposit] = useState();
  const { pathname } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pathname === "/manager/editaccount") {
      setMethodType("PUT");
    } else {
      setMethodType("POST");
    }
    let user = JSON.parse(window.localStorage.getItem("user"));
    const reqResult = await callApi(
      addAccountUrl,
      {
        accountId: editId,
        accountType: accountType,
        initialDeposit: initialdeposit,
        customer: {
          customerId: values.customerId,
          address: {
            id: values.customerId,
          },
        },
        manager: {
          managerId: user.managerId,
        },
      },
      methodType
    );
    if (reqResult) {
      methodType === "POST"
        ? Store.addNotification({
            title: "Accont Created Successfully",
            message:
              "Account was created successfully. Go Home to check Account",
            type: "success",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
            },
          })
        : Store.addNotification({
            title: "Account Updated Successfully",
            message:
              "Account was updated successfully. Go Home to check Account",
            type: "success",
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
      <h3 className="my-4">
        {pathname === "/manager/addaccount" ? "Add New Account" : null}
      </h3>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="container my-3 text-left"
      >
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Customer Id</label>
            <input
              name="customerId"
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="Customer Id"
              onChange={handleChange}
              required
            />
            <small>
              {errors.customerId && (
                <p className="form-err-msg">{errors.customerId}</p>
              )}
            </small>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="gender">Account Type</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="validationCustom03">Initial Deposit</label>
          <input
            name="initialdeposit"
            type="text"
            className="form-control"
            id="validationCustom03"
            placeholder="Initial Deposit"
            onChange={(e) => setInitialDeposit(e.target.value)}
            required
          />
          {/* <small>{errors.address && <p className='form-err-msg'>{errors.address}</p>}</small> */}
        </div>
        <div className="form-row">
          <button className="btn btn-danger m-2">Reset</button>
          <button className="btn btn-success m-2">Submit</button>
        </div>
      </form>
    </>
  );
}
