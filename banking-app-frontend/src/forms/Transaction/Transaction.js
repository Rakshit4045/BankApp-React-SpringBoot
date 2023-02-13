import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Store } from "react-notifications-component";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import "./Transaction.css";

const callApi = async (url, data) => {
  let TransactionData = await fetch(url, {
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

  return TransactionData;
};

export default function Transaction() {
  const { pathname } = useLocation();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState(null);
  const { handleChange, values } = useForm();
  let transactionType = null;
  useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values.accountnumber);
    if (pathname === "/manager/withdrawal") {
      transactionType = "withdrawal";
    } else {
      transactionType = "deposit";
    }
    const getData = await callApi("http://localhost:8080/api/v1/transaction/", {
      amount: amount,
      description: description,
      transactionType: transactionType,
      senderAccount: {
        accountId: values.accountnumber,
      },
      receiverAccount: {
        accountId: values.accountnumber,
      },
    });
    console.log(getData);
    if (getData) {
      pathname === "/manager/withdrawal"
        ? Store.addNotification({
            title: "Withdrawal Successfully",
            message:
              amount + " was withdrawan successfully. Please check Balance.",
            type: "success",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
            },
          })
        : Store.addNotification({
            title: "Deposit Successfully",
            message:
              amount + " was deposited successfully. Please check Balance.",
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
        {pathname === "/manager/withdrawal" ? "Withdrawal" : "Deposit"}
      </h3>
      <form className="container my-3 text-left" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-md-6 mb-3">
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
            {/* <small>{errors.address && <p className='form-err-msg'>{errors.address}</p>}</small> */}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Amount</label>
            <input
              name="amount"
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="Please Enter Amount"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            {/* <small>{errors.address && <p className='form-err-msg'>{errors.address}</p>}</small> */}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="validationCustom03">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
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
