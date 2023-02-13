import { useState } from "react";
import { Store } from "react-notifications-component";
import useForm from "../../hooks/useForm";
import "./FundTransfer.css";

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
    .catch((err) => {
      return false;
    });

  return TransactionData;
};

export default function FundTransfer() {
  const { handleChange, values } = useForm();
  const [amount, setAmount] = useState();
  const [receiverAccountNumber, setReceiverAccountNumber] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values.accountnumber);
    const getData = await callApi("http://localhost:8080/api/v1/transaction/", {
      amount: amount,
      transactionType: "fundtransfer",
      senderAccount: {
        accountId: values.accountnumber,
      },
      receiverAccount: {
        accountId: receiverAccountNumber,
      },
    });
    if (getData) {
      Store.addNotification({
        title: "Fund Transfer Successfully",
        message:
          amount +
          " was successfully transfered to bank Account Number: " +
          receiverAccountNumber,
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
      <h3 className="my-4">Fund Transfer</h3>
      <form className="container my-3 text-left" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Sender's Account Number</label>
            <input
              name="accountnumber"
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="Please Enter Sender's Account Number"
              onChange={handleChange}
              required
            />
            {/* <small>{errors.address && <p className='form-err-msg'>{errors.address}</p>}</small> */}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">
              Receiver's Account Number
            </label>
            <input
              name="accountnumber"
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="Please Enter Receiver's Account Number"
              onChange={(e) => setReceiverAccountNumber(e.target.value)}
              required
            />
            {/* <small>{errors.address && <p className='form-err-msg'>{errors.address}</p>}</small> */}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="validationCustom03">Amount</label>
          <input
            name="amount"
            type="text"
            className="form-control"
            id="amount"
            placeholder="Please Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
            required
          />{" "}
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
