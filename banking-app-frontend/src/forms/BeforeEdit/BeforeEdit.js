import { useLocation } from "react-router-dom";
import { Store } from "react-notifications-component";
import useForm from "../../hooks/useForm";
import useNotification from "../../hooks/useNotification";

const callApi = async (url) => {
  let check = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // if (data) setCustomerIdValidate(true);
      // else setCustomerIdValidate(false);
      // console.log(customerIdValidate);
      return data;
    })
    .catch((err) => {
      return false;
    });
  return check;
};

export default function BeforeEdit({ getEditData }) {
  let validation = null;
  // const [customerIdValidate, setCustomerIdValidate] = useState(null);
  const location = useLocation();
  const { handleChange, values, errors } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = JSON.parse(window.localStorage.getItem("user"));
    const getData = await callApi(
      url === "/manager/editcustomer"
        ? "http://localhost:8080/api/v1/customer/" + values.accountnumber
        : "http://localhost:8080/api/v1/account/" +
            values.accountnumber +
            "/manager/" +
            user.managerId
    );
    console.log(getData);
    if (getData) {
      Store.addNotification({
        title: "Account Number Available",
        message: "Please wait Form Loading.....!",
        type: "success",
        container: "top-center",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
        },
      });
      validation = true;
      setTimeout(function () {
        getEditData(validation, parseInt(values.accountnumber));
      }, 3000);
    } else {
      validation = false;
      Store.addNotification({
        title: "Invalid Account Number",
        message: "Account number not found. Please try again",
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

  const url = location.pathname;
  return (
    <>
      <form className="container my-3 text-left" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col mb-3">
            <label htmlFor="validationCustom03">
              {url === "/manager/editcustomer"
                ? "Customer ID"
                : "Account Number"}
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
