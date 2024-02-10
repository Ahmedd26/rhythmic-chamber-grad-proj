import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleUsernameChange = (event) => {
    setRegisterData((prevState) => ({
      ...prevState,
      username: event.target.value,
    }));
  };

  const handleEmailChange = (event) => {
    setRegisterData((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  const handlePhoneNumberChange = (event) => {
    setRegisterData((prevState) => ({
      ...prevState,
      phoneNumber: event.target.value,
    }));
  };

  const handlePasswordChange = (event) => {
    setRegisterData((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const handleConfirmPasswordChange = (event) => {
    setRegisterData((prevState) => ({
      ...prevState,
      confirmPassword: event.target.value,
    }));
  };

  const handleUsernameBlur = () => {
    if (registerData.username.length < 3) {
      setErrorMessages((prevState) => ({
        ...prevState,
        username: "Username should be at least 3 characters.",
      }));
    } else {
      setErrorMessages((prevState) => ({
        ...prevState,
        username: "",
      }));
    }
  };

  const handleEmailBlur = () => {
    const isValidEmail = validateEmail(registerData.email);
    setErrorMessages((prevState) => ({
      ...prevState,
      email: isValidEmail ? "" : "Invalid email.",
    }));
  };

  const handlePhoneNumberBlur = () => {
    const isValidPhoneNumber = validatePhoneNumber(registerData.phoneNumber);
    setErrorMessages((prevState) => ({
      ...prevState,
      phoneNumber: isValidPhoneNumber ? "" : "Invalid phone number.",
    }));
  };

  const handlePasswordBlur = () => {
    const isValidPassword = validatePassword(registerData.password);
    setErrorMessages((prevState) => ({
      ...prevState,
      password: isValidPassword
        ? ""
        : "Password should have at least one uppercase character, one lowercase character, one special character, and one number. The length should be 8 or more characters.",
    }));
  };

  const handleConfirmPasswordBlur = () => {
    const { password, confirmPassword } = registerData;
    const isMatching = password === confirmPassword;
    setErrorMessages((prevState) => ({
      ...prevState,
      confirmPassword: isMatching ? "" : "Passwords do not match.",
    }));
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    // Perform final validation before form submission
    const { username, email, phoneNumber, password, confirmPassword } =
      registerData;

    let hasError = false;

    if (username.length < 3) {
      setErrorMessages((prevState) => ({
        ...prevState,
        username: "Username should be at least 3 characters.",
      }));
      hasError = true;
    }

    if (!validateEmail(email)) {
      setErrorMessages((prevState) => ({
        ...prevState,
        email: "Invalid email.",
      }));
      hasError = true;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessages((prevState) => ({
        ...prevState,
        phoneNumber: "Phone number must be 11 numbers.",
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

    if (password !== confirmPassword) {
      setErrorMessages((prevState) => ({
        ...prevState,
        confirmPassword: "Passwords do not match.",
      }));
      hasError = true;
    }

    if (!hasError) {
      console.log(registerData);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{11}$/; // Assuming 10-digit phone numbers
    return phoneRegex.test(phoneNumber);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="registerPage">
      <div className="registerFormSide">
        <div className="registerForm">
          <h1 className="specialAuthHeading">Register</h1>
          <div className="container">
            <form className="formItems" onSubmit={handleFormSubmission}>
              <div className="formItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  onChange={handleUsernameChange}
                  onBlur={handleUsernameBlur}
                  value={registerData.username}
                />
              </div>
              {errorMessages.username && (
                <span className="errorMessage">{errorMessages.username}</span>
              )}
              <div className="formItem">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  value={registerData.email}
                />
              </div>
              {errorMessages.email && (
                <span className="errorMessage">{errorMessages.email}</span>
              )}
              <div className="formItem">
                <label htmlFor="">Phone number</label>
                <input
                  type="text"
                  onChange={handlePhoneNumberChange}
                  onBlur={handlePhoneNumberBlur}
                  value={registerData.phoneNumber}
                />
              </div>
              {errorMessages.phoneNumber && (
                <span className="errorMessage">
                  {errorMessages.phoneNumber}
                </span>
              )}
              <div className="formItem">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  value={registerData.password}
                />
              </div>
              {errorMessages.password && (
                <span className="errorMessage">{errorMessages.password}</span>
              )}
              <div className="formItem">
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  onChange={handleConfirmPasswordChange}
                  onBlur={handleConfirmPasswordBlur}
                  value={registerData.confirmPassword}
                />
              </div>
              {errorMessages.confirmPassword && (
                <span className="errorMessage">
                  {errorMessages.confirmPassword}
                </span>
              )}
              <div className="alreadyUser">
                <Link to="/login">Already a user?</Link>
              </div>
              <div className="submitButton">
                <button type="submit" onClick={handleFormSubmission}>
                  Register
                </button>
              </div>
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

export default Register;
