import { useEffect } from "react";
import { useState } from "react";
import { Store } from "react-notifications-component";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import InternetChecker from "../InternetChecker/InternetChecker";
import "./Login.css";

const callApi = async (url, data) => {
  let LoginData = await fetch(url, {
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
      window.localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
      return true;
    })
    .catch((err) => {
      return false;
    });
  return LoginData;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.pathname;
  let interval = null;

  const { handleChange, values, errors } = useForm();

  const InternetErrMessagenger = () => setIsOnline(navigator.onLine === true);

  useEffect(() => {
    interval = setInterval(InternetErrMessagenger, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    if (url === "/login") {
      navigate("/login/changepassword", { state: { path: url } });
    } else {
      navigate("/admin/changepassword", { state: { path: url } });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const req = await callApi(
      url === "/login"
        ? "http://localhost:8080/api/v1/customer/login"
        : "http://localhost:8080/api/v1/manager/login",
      {
        email: values.email,
        password: values.password,
      }
    );
    if (req) {
      Store.addNotification({
        title: "Login Successful",
        message: "Please wait Redirecting.....!",
        type: "success",
        container: "top-center",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
        },
      });
      setTimeout(function () {
        url === "/login" ? navigate("/customer") : navigate("/manager");
      }, 2000);
    } else {
      Store.addNotification({
        title: "Login Failed",
        message: "Email and Password are incorrect",
        type: "danger",
        container: "top-center",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
        },
      });
    }
  };

  const handlePassword = () => {
    if (showPassword === true) setShowPassword(false);
    else setShowPassword(true);
  };

  return (
    <>
      {isOnline !== true ? <InternetChecker /> : ""}
      <div className="login-section bg-warning">
        <form className="login-form bg-white" onSubmit={handleSubmit}>
          <div className="form-group text-left">
            <label htmlFor="email">
              <i className="bi bi-person px-2"></i>Email Address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="abc@gmail.com"
              onChange={handleChange}
              required
            ></input>
            <small>
              {errors.email && <p className="form-err-msg">{errors.email}</p>}
            </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="password align-item-center">
              <i className="bi bi-lock px-2"></i>Password
            </label>
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                required
              ></input>
              {showPassword ? (
                <i
                  className="show-password bi bi-eye-slash"
                  onClick={handlePassword}
                ></i>
              ) : (
                <i
                  className="show-password bi bi-eye"
                  onClick={handlePassword}
                ></i>
              )}
            </div>

            <small>
              {errors.password && (
                <p className="form-err-msg">{errors.password}</p>
              )}
            </small>
          </div>
          <p
            className="change-password-link text-left text-primary"
            onClick={handleClick}
          >
            Forgot Password?
          </p>
          <button type="submit" className="btn btn-primary mx-auto">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
