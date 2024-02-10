import React, { useState } from "react";
import axios from "axios";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    loginError: "",
  });

  const handleEmailChange = (event) => {
    setLoginData((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    setLoginData((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const handleEmailBlur = () => {
    const isValidEmail = validateEmail(loginData.email);
    setErrorMessages((prevState) => ({
      ...prevState,
      email: isValidEmail ? "" : "Invalid email.",
    }));
  };

  const handlePasswordBlur = () => {
    const isValidPassword = validatePassword(loginData.password);
    setErrorMessages((prevState) => ({
      ...prevState,
      password: isValidPassword ? "" : "Incorrect Password",
    }));
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    // Perform final validation before form submission
    const { email, password } = loginData;

    let hasError = false;

    if (!validateEmail(email)) {
      setErrorMessages((prevState) => ({
        ...prevState,
        email: "Invalid email.",
      }));
      hasError = true;
    }

    if (!validatePassword(password)) {
      setErrorMessages((prevState) => ({
        ...prevState,
        password:
          "Password should have at least one uppercase character, one lowercase character, one special character, and one number. The length should be 8 or more characters.",
      }));
      hasError = true;
    }

    if (!hasError) {
      // Simulate API call using Axios
      axios
        .post("/api/login", { email, password })
        .then((response) => {
          // Handle successful login
          console.log("Logged in successfully!");
          console.log(response.data); // Assuming the response contains the user data or token
        })
        .catch((error) => {
          // Handle login error
          setErrorMessages((prevState) => ({
            ...prevState,
            loginError: "Invalid email or password.",
          }));
          console.log("Login failed:", error);
        });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="loginPage">
      <div className="loginFormSide">
        <div className="loginForm">
          <h1 className="specialAuthHeading">Login</h1>
          <div className="container">
            <form className="formItems" onSubmit={handleFormSubmission}>
              <div className="formItem">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  value={loginData.email}
                />
              </div>
              {errorMessages.email && (
                <span className="errorMessage">{errorMessages.email}</span>
              )}
              <div className="formItem">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  value={loginData.password}
                />
              </div>
              {errorMessages.password && (
                <span className="errorMessage">{errorMessages.password}</span>
              )}
              <div className="alreadyUser">
                <Link to="/register">Create account?</Link>
              </div>
              <div className="submitButton">
                <button type="submit">Login</button>
              </div>
              {errorMessages.loginError && (
                <span className="errorMessage centerErr">
                  {errorMessages.loginError}
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="sideImage">
        <div className="imageWrapper"></div>
      </div>
    </div>
  );
};

export default Login;
