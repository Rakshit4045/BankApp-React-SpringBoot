import { useState } from "react";
import { Store } from "react-notifications-component";
import useForm from "../../hooks/useForm";

const callApi = async (url) => {
  let check = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((errors) => console.log(errors));
  return check;
};

function TransactionDataTable({ transactionData }) {
  return (
    <div className="table-responsive-lg container">
      <h3 className="m-4">Last Five Transactions</h3>
      <table className="table">
        <thead className="bg-warning">
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">Transaction Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {transactionData === null ? (
            <>
              <tr>
                <td>No Transactions</td>
                <td>No Transactions</td>
                <td>No Transactions</td>
                <td>No Transactions</td>
              </tr>
            </>
          ) : (
            transactionData.map((data) => {
              return (
                <tr key={data.transactionId}>
                  <th scope="row">{data.transactionId}</th>
                  <td>{data.transactionType}</td>
                  <td>{data.amount}</td>
                  <td>{data.description ? data.description : "-----"}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function MiniStatement() {
  const { handleChange, values, errors } = useForm();
  const [transactionData, setTransactionData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const getData = await callApi(
      "http://localhost:8080/api/v1/transaction/" +
        values.accountnumber +
        "/somesendertransaction"
    );
    setTransactionData(getData);
    if (getData.length > 0) {
      Store.addNotification({
        title: "Mini Transactions",
        message: "Your Last 5 Transactions are displayed below",
        type: "info",
        container: "top-center",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
        },
      });
    } else {
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
      <h3 className="my-4">Mini Statement</h3>
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
      <TransactionDataTable transactionData={transactionData} />
    </>
  );
}
