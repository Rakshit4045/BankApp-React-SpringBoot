import DatePicker from "react-datepicker";
import "./CreateCustomer.css";
import "react-datepicker/dist/react-datepicker.css";
import useForm from "../../hooks/useForm";
import { Store } from "react-notifications-component";
// import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { addCustomerUrl } from "../../URL";

const callApi = async (url, data) => {
  let CustomerData = await fetch(url, {
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

  return CustomerData;
};

export default function CreateCustomer({ editId }) {
  const { handleChange, handleReset, values, errors } = useForm();
  const [date, setDate] = useState();
  const [gender, setGender] = useState("");
  const { pathname } = useLocation();

  //   useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prevCustomerId = editId;
    let user = JSON.parse(window.localStorage.getItem("user"));
    const reqResult = await callApi(addCustomerUrl, {
      customerId: prevCustomerId,
      email: values.email,
      gender: gender,
      date: date,
      telephone: values.telephone,
      manager: {
        managerId: user.managerId,
        email: user.email,
      },
      address: {
        id: prevCustomerId,
        addressLineOne: values.address1,
        addressLineTwo: values.address2,
        city: values.city,
        state: values.state,
        pin: values.PIN,
      },
    });
    console.log(reqResult);
    if (reqResult) {
      pathname === "/manager/addcustomer"
        ? Store.addNotification({
            title: "Customer Added Successfully",
            message: values.customername + " was added successfully",
            type: "success",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
            },
          })
        : Store.addNotification({
            title: "Customer Updated Successfully",
            message: values.customername + " was updated successfully",
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
        {pathname === "/manager/addcustomer" ? "Add New Customer" : null}
      </h3>
      <form
        method="POST"
        className="container my-3 text-left"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Customer Name</label>
          <input
            type="text"
            name="customername"
            className="form-control"
            id="cusotmerName"
            placeholder="Enter Customer Name"
            onChange={handleChange}
            required
          />
          <small>
            {errors.customername && (
              <p className="form-err-msg">{errors.customername}</p>
            )}
          </small>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="date">Date</label>
            <DatePicker
              className="form-control"
              dateFormat="dd-MM-yyyy"
              placeholderText="DD-MM-YYYY"
              selected={date}
              value={date}
              required
              onChange={(date) => setDate(date)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Address Line 1</label>
            <input
              name="address1"
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="Address Line 1"
              onChange={handleChange}
              required
            />
            <small>
              {errors.address && (
                <p className="form-err-msg">{errors.address}</p>
              )}
            </small>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Address Line 2</label>
            <input
              name="address2"
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="Address Line 2"
              onChange={handleChange}
              required
            />
            <small>
              {errors.address && (
                <p className="form-err-msg">{errors.address}</p>
              )}
            </small>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">City</label>
            <input
              name="city"
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="City"
              onChange={handleChange}
              required
            />
            <small>
              {errors.city && <p className="form-err-msg">{errors.city}</p>}
            </small>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">State</label>
            <input
              name="state"
              type="text"
              className="form-control"
              id="validationCustom04"
              placeholder="State"
              onChange={handleChange}
              required
            />
            <small>
              {errors.state && <p className="form-err-msg">{errors.state}</p>}
            </small>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">PIN</label>
            <input
              name="PIN"
              type="text"
              className="form-control"
              id="validationCustom05"
              placeholder="PIN"
              onChange={handleChange}
              required
            />
            <small>
              {errors.PIN && <p className="form-err-msg">{errors.PIN}</p>}
            </small>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Telephone</label>
            <input
              name="telephone"
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="Telephone No."
              onChange={handleChange}
              required
            />
            <small>
              {errors.telephone && (
                <p className="form-err-msg">{errors.telephone}</p>
              )}
            </small>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="validationCustom03"
              placeholder="abc@gmail.com"
              onChange={handleChange}
              required
            />
            <small>
              {errors.email && <p className="form-err-msg">{errors.email}</p>}
            </small>
          </div>
        </div>
        <div className="form-row">
          <button className="btn btn-danger m-2" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-success m-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
