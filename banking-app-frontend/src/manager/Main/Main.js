import { useEffect } from "react";
import { useState } from "react";
import "./Main.css";

const customerDataApi = async (url) => {
  let getData = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
  return getData;
};

const accountDataApi = async (url) => {
  let getData = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
  return getData;
};

function AccountDataTable({ accountData }) {
  return (
    <div className="table-responsive-lg">
      <h3 className="m-4">Your Accounts</h3>
      <table className="table">
        <thead className="bg-warning">
          <tr>
            <th scope="col">Account ID</th>
            <th scope="col">Account Type</th>
            <th scope="col">Amount</th>
            {/* <th scope="col">Customer ID</th> */}
          </tr>
        </thead>
        <tbody>
          {accountData === null ? (
            <>
              <tr>
                <td>No Accounts Created</td>
                <td>No Accounts Created</td>
                <td>No Accounts Created</td>
                {/* <td>No Accounts Created</td> */}
              </tr>
            </>
          ) : (
            accountData.map((data) => {
              return (
                <tr key={data.accountId}>
                  <th scope="row">{data.accountId}</th>
                  <td>{data.accountType}</td>
                  <td>{data.initialDeposit}</td>
                  {/* <td>{data.customerId}</td> */}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

function CustomerDataTable({ customerData }) {
  return (
    <div className="table-responsive-lg">
      <h3 className="m-5">Your Customers</h3>
      <table className="table">
        <thead className="bg-warning">
          <tr>
            <th scope="col">Customer ID</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">PIN</th>
            <th scope="col">Telephone</th>
          </tr>
        </thead>
        <tbody>
          {customerData === null ? (
            <tr>
              <td>No Customers Created</td>
            </tr>
          ) : (
            customerData.map((data) => {
              return (
                <tr key={data.customerId}>
                  <th scope="row">{data.customerId}</th>
                  <td>{data.email}</td>
                  <td>{data.gender}</td>
                  <td>
                    {data.address.addressLineOne} ,{" "}
                    {data.address.addressLineTwo}
                  </td>
                  <td>{data.address.city}</td>
                  <td>{data.address.state}</td>
                  <td>{data.address.pin}</td>
                  <td>{data.telephone}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function Main() {
  const [customerData, setCustomerData] = useState(null);
  const [accountData, setAccountData] = useState(null);
  let custData, accData;
  const callCustomerApi = async () => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    custData = await customerDataApi(
      "http://localhost:8080/api/v1/customer/" + user.managerId + "/allcustomer"
    );
    setCustomerData(custData);
    return custData;
  };
  const callAccountApi = async () => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    accData = await accountDataApi(
      "http://localhost:8080/api/v1/account/" +
        user.managerId +
        "/manageraccountlist"
    );
    setAccountData(accData);
    return accData;
  };
  useEffect(() => {
    callCustomerApi();
    callAccountApi();
  }, []);
  return (
    <>
      <div className="container">
        <div className="customer-section">
          <AccountDataTable accountData={accountData} />
          <CustomerDataTable customerData={customerData} />
        </div>
      </div>
    </>
  );
}
