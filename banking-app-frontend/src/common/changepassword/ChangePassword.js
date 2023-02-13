import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import "./ChangePassword.css";
import "react-toastify/dist/ReactToastify.css";
import useNotification from "../../hooks/useNotification";

const callApi = async (url, data, methodType) => {
  let check = await fetch(url, {
    method: methodType,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      return false;
    });

  return check;
};

export default function ChangePassword() {
  const [userData, setUserData] = useState();
  const [emailErrorMsg, setEmailErrorMsg] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPwdMsg, setConfirmPwdMsg] = useState(false);
  const [passwordContent, setPasswordContent] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [displayNotification, setDisplayNotification] = useState(false);

  let navigate = useNavigate();
  const notify = useNotification("success", "Password Changed Successfully");
  const { pathname } = useLocation();
  const { handleChange, values, errors } = useForm();

  useEffect(() => {
    if (displayNotification) {
      setTimeout(() => {
        pathname === "/login/changepassword"
          ? navigate("/login")
          : navigate("/admin");
      }, 6000);
    }
  }, [navigate, pathname, displayNotification]);

  const handleEmail = async (e) => {
    e.preventDefault();
    const getData = await callApi(
      pathname === "/login/changepassword"
        ? "http://localhost:8080/api/v1/customer/emailvalidation"
        : "http://localhost:8080/api/v1/manager/emailvalidation",
      {
        email: values.email,
      },
      "POST"
    );
    if (getData) {
      setPasswordContent(true);
      setUserData(getData);
    } else {
      setPasswordContent(false);
      setEmailErrorMsg(true);
    }
  };

  const handlePwdChange = async (e) => {
    e.preventDefault();
    if (confirmPassword === values.password) {
      console.log(values.password);
      const req = await callApi(
        pathname === "/login/changepassword"
          ? "http://localhost:8080/api/v1/customer/" + userData.customerId
          : "http://localhost:8080/api/v1/manager/" + userData.managerId,
        pathname === "/login/changepassword"
          ? {
              customerId: userData.customerId,
              password: values.password,
            }
          : {
              managerId: userData.managerId,
              password: values.password,
            },
        "PATCH"
      );
      if (req) {
        setDisplayNotification(true);
      }
    } else {
      setConfirmPwdMsg(true);
    }
  };

  const handleOldPassword = () => {
    if (showOldPassword === true) setShowOldPassword(false);
    else setShowOldPassword(true);
  };

  const handleNewPassword = () => {
    if (showNewPassword === true) setShowNewPassword(false);
    else setShowNewPassword(true);
  };

  const handleConfirmPassword = () => {
    if (showConfirmPassword === true) setShowConfirmPassword(false);
    else setShowConfirmPassword(true);
  };

  return (
    <>
      {displayNotification ? notify : null}
      <div className="change-password-section bg-warning px-4 py-2 mx-auto rounded shadow">
        <h3>Change Password</h3>
        <form className="form-group text-right">
          {passwordContent === false ? (
            <>
              <div className="form-group text-left">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="validationCustom03"
                  placeholder="abc@gmail.com"
                  onChange={handleChange}
                  required
                ></input>
                <small>
                  {errors.email && (
                    <p className="form-err-msg">{errors.email}</p>
                  )}
                  {emailErrorMsg && (
                    <p className="form-err-msg">Email does not exists.</p>
                  )}
                </small>
              </div>
              <button
                type="submit"
                className="btn btn-primary ml-0"
                onClick={handleEmail}
              >
                Next
              </button>
            </>
          ) : (
            <>
              <div className="form-group text-left">
                <label htmlFor="old password">Old Password</label>
                <div className="password">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    name="old password"
                    className="form-control"
                    id="oldpassword"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  ></input>
                  {showOldPassword ? (
                    <i
                      className="show-password bi bi-eye-slash"
                      onClick={handleOldPassword}
                    ></i>
                  ) : (
                    <i
                      className="show-password bi bi-eye"
                      onClick={handleOldPassword}
                    ></i>
                  )}
                </div>
              </div>
              <div className="form-group text-left">
                <label htmlFor="new password">New Password</label>
                <div className="password">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="New Password"
                    onChange={handleChange}
                    required
                  ></input>
                  {showNewPassword ? (
                    <i
                      className="show-password bi bi-eye-slash"
                      onClick={handleNewPassword}
                    ></i>
                  ) : (
                    <i
                      className="show-password bi bi-eye"
                      onClick={handleNewPassword}
                    ></i>
                  )}
                </div>
                <small>
                  {errors.password && (
                    <p className="form-err-msg">{errors.password}</p>
                  )}
                </small>
              </div>
              <div className="form-group text-left">
                <label htmlFor="old password">Confirm Password</label>
                <div className="password">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm password"
                    className="form-control"
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  ></input>
                  {showConfirmPassword ? (
                    <i
                      className="show-password bi bi-eye-slash"
                      onClick={handleConfirmPassword}
                    ></i>
                  ) : (
                    <i
                      className="show-password bi bi-eye"
                      onClick={handleConfirmPassword}
                    ></i>
                  )}
                </div>
                <small>
                  {confirmPwdMsg && (
                    <p className="form-err-msg">
                      New Password and Confirm Password does not match.
                    </p>
                  )}
                </small>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={handlePwdChange}
              >
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
}
