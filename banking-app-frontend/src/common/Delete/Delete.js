import { useLocation } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Store } from "react-notifications-component";

const callApi = async (url) => {
  console.log(url);
  let check = await fetch(url, { method: "DELETE" })
    .then((res) => {
      if (!res.ok) return false;
      console.log(res);
      // return true;
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      return false;
    });
  return check;
};

export default function Delete() {
  const { pathname } = useLocation();
  const { handleChange, values, errors } = useForm();

  const location = useLocation();
  const url = location.pathname;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values.accountnumber);
    const getData = await callApi(
      url === "/manager/deletecustomer"
        ? "http://localhost:8080/api/v1/customer/" + values.accountnumber
        : "http://localhost:8080/api/v1/account/" + values.accountnumber
    );

    console.log(getData);
    if (getData) {
      url === "/manager/deletecustomer"
        ? Store.addNotification({
            title: "Customer Deleted Successfully",
            message: "Customer was deleted successfully. Go Home to check",
            type: "success",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
            },
          })
        : Store.addNotification({
            title: "Accont Deleted Successfully",
            message: "Account was deleted successfully. Go Home to check",
            type: "success",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
            },
          });
    } else {
      Store.addNotification({
        title: "Invalid Input",
        message: "Inserted data does not exists. Please try again.",
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
      <h3 className="my-4">
        {pathname === "/manager/deletecustomer"
          ? "Delete Customer"
          : "Delete Account"}
      </h3>
      <form className="container my-3 text-left" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col mb-3">
            <label htmlFor="validationCustom03">
              {pathname === "/manager/deletecustomer"
                ? "Customer ID"
                : "Account Numebr"}
            </label>
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
    </>
  );
}
