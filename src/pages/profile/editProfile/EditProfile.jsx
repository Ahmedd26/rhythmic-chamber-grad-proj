import "./editProfile.scss";
import ProfileAvatar from "../../../assets/images/BeatImage.png";
import Select from "react-select";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const titles = [
  { value: "artist", label: "Artist" },
  { value: "Music Producer", label: "Music Producer" },
  { value: "Sound Engineer", label: "Sound Engineer" },
  { value: "Sound Designer", label: "Sound Designer" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "none",
    outline: "none",
    backgroundColor: "#333",
    color: "#fcb14b",
    "&:hover": {
      border: "none",
      outline: "none",
    },
    "&:focus": {
      outline: "none",
      border: "none",
      boxShadow: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#fcb14b" : "#101010",
    color: state.isFocused ? "#101010" : "#fcb14b",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "green",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    backgroundColor: "#232323",
    color: "#fcb14b",
    borderRadius: 0,
    padding: "2px 8px",
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    backgroundColor: "#101010",
    color: "#fcb14b",
    cursor: "pointer",
    ":hover": {
      color: "#101010",
      backgroundColor: "#fcb14b",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "#fcb14b",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#fcb14b",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#fcb14b",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#101010",
  }),
};

const EditProfile = () => {
  const navigate = useNavigate();
  const handleNavBack = () => {
    navigate("/profile");
  };
  const [image, setImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");
  // Handle Image
  const [isValidImage, setIsValidImage] = useState(true);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = new Image();
      img.onload = function () {
        const { width, height } = img;
        const aspectRatio = width / height;
        // Check the aspect ratio of the uploaded image
        if (Math.abs(aspectRatio - 1 / 1) > 0.01) {
          setIsValidImage(false);
          console.log("False");
        } else {
          setIsValidImage(true);
          setImage(reader.result);
          console.log("True");
        }
      };

      if (file) {
        img.src = URL.createObjectURL(file);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle Phone Error
  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);

    const isValid =
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/im.test(
        value
      );

    if (isValid || value === "") {
      setPhoneErrorMessage("");
    } else {
      setPhoneErrorMessage("Please enter a valid phone number.");
    }
  };

  // Handle Username Change
  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);

    if (value.length >= 3 || value === "") {
      setUsernameErrorMessage("");
    } else {
      setUsernameErrorMessage("Username must be at least 3 characters long.");
    }
  };
  // Handle Password & Confirm Password
  const isPasswordValid = (password) => {
    // Regex pattern for password validation
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };
  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);

    if (isPasswordValid(value) || value === "") {
      setPasswordErrorMessage("");
    } else {
      setPasswordErrorMessage(
        "Password must contain at least one uppercase character, one lowercase character, one digit, one special character, and be at least 8 characters long."
      );
    }
  };
  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);

    if (value === password || value === "") {
      setConfirmPasswordErrorMessage("");
    } else {
      setConfirmPasswordErrorMessage("Passwords do not match.");
    }
  };
  // Handle Social Media URL Change
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
    spotify: "",
    soundcloud: "",
  });

  const handleSocialLinkChange = (event, platform) => {
    const { value } = event.target;

    // Update the corresponding social link based on the platform
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [platform]: value,
    }));

    // Validate the URL format
    const isValidUrl = isValidURL(value);

    if (isValidUrl || value === "") {
      // Clear the error message if the URL is valid or empty
      setSocialLinkErrorMessage(platform, "");
    } else {
      // Display an error message for invalid URLs
      setSocialLinkErrorMessage(
        platform,
        `Please enter a valid URL for ${platform}.`
      );
    }
  };

  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const [socialLinkErrors, setSocialLinkErrors] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
    spotify: "",
    soundcloud: "",
  });

  const setSocialLinkErrorMessage = (platform, errorMessage) => {
    setSocialLinkErrors((prevErrors) => ({
      ...prevErrors,
      [platform]: errorMessage,
    }));
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      image,
      phoneNumber,
      username,
      selectedTitles,
      password,
      confirmPassword,
      socialLinks,
      // ...add any other form fields here
    };

    // Make the HTTP POST request to the fake API endpoint
    axios
      .post("https://fake-api.com/endpoint", formData)
      .then((response) => {
        // Handle the response from the fake API if needed
        console.log(response.data);

        // Navigate to '/profile' after successful submission
        window.location.href = "/profile";
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };
  return (
    <div className="container">
      <div className="editProfile">
        <form className="editForm" onSubmit={handleFormSubmission}>
          <h1 className="editProTitle">Edit Profile</h1>
          <div className="editFormInputs">
            {/* Image */}
            <div className="editFormItem">
              <div className="editLeft">
                <img
                  src={image || ProfileAvatar}
                  alt="avatar"
                  className="editAvatar"
                />
              </div>
              <div className="editRight">
                <input
                  type="file"
                  accept="image/*"
                  id="updateAvatar"
                  onChange={handleFileChange}
                />
                <label htmlFor="updateAvatar" className="uploadAvatar">
                  <span>Upload profile picture</span>
                  <i className="fa-solid fa-upload"></i>
                </label>
              </div>
              {!isValidImage && (
                <p className="imageError">
                  Please upload a image with the aspect ratio of 1:1
                </p>
              )}
            </div>
            {/* Username */}
            <div className="editFormItem">
              <label htmlFor="" className="editLeft">
                Username
              </label>
              <div className="editRight">
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
                {usernameErrorMessage && (
                  <span className="error">{usernameErrorMessage}</span>
                )}
              </div>
            </div>
            {/* Title*/}
            <div className="editFormItem">
              <label htmlFor="" className="editLeft">
                Title
              </label>
              <div className="editRight">
                <Select
                  isMulti
                  name="titles"
                  options={titles}
                  styles={customStyles}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(selectedOptions) =>
                    setSelectedTitles(
                      selectedOptions.map((option) => option.value)
                    )
                  }
                />
              </div>
              {selectedTitles.length === 0 && (
                <span className="titleError">
                  Please select at least one title.
                </span>
              )}
            </div>
            {/* Phone */}
            <div className="editFormItem">
              <label htmlFor="" className="editLeft">
                Phone
              </label>
              <div className="editRight">
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                {phoneErrorMessage && (
                  <span className="error">{phoneErrorMessage}</span>
                )}
              </div>
            </div>

            {/* Password*/}
            <div className="editFormItem">
              <label htmlFor="" className="editLeft">
                Password
              </label>
              <div className="editRight">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {passwordErrorMessage && (
                <span className="error">{passwordErrorMessage}</span>
              )}
            </div>
            {/* Confirm password*/}
            <div className="editFormItem">
              <label htmlFor="" className="editLeft">
                Confirm password
              </label>
              <div className="editRight">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              {confirmPasswordErrorMessage && (
                <span className="error">{confirmPasswordErrorMessage}</span>
              )}
            </div>

            {/* End */}
          </div>
          <div className="editSocials">
            <div className="social">
              <i className="fa-brands fa-square-facebook socialIcon"></i>
              <input
                type="text"
                className="socialLink"
                placeholder="Enter URL"
                value={socialLinks.facebook}
                onChange={(e) => handleSocialLinkChange(e, "facebook")}
              />
              {socialLinkErrors.facebook && (
                <span className="error">{socialLinkErrors.facebook}</span>
              )}
            </div>
            <div className="social">
              <i className="fa-brands fa-instagram socialIcon"></i>
              <input
                type="text"
                className="socialLink"
                placeholder="Enter URL"
                value={socialLinks.instagram}
                onChange={(e) => handleSocialLinkChange(e, "instagram")}
              />
              {socialLinkErrors.instagram && (
                <span className="error">{socialLinkErrors.instagram}</span>
              )}
            </div>
            <div className="social">
              <i className="fa-brands fa-twitter socialIcon"></i>
              <input
                type="text"
                className="socialLink"
                placeholder="Enter URL"
                value={socialLinks.twitter}
                onChange={(e) => handleSocialLinkChange(e, "twitter")}
              />
              {socialLinkErrors.twitter && (
                <span className="error">{socialLinkErrors.twitter}</span>
              )}
            </div>
            <div className="social">
              <i className="fa-brands fa-youtube socialIcon"></i>
              <input
                type="text"
                className="socialLink"
                placeholder="Enter URL"
                value={socialLinks.youtube}
                onChange={(e) => handleSocialLinkChange(e, "youtube")}
              />
              {socialLinkErrors.youtube && (
                <span className="error">{socialLinkErrors.youtube}</span>
              )}
            </div>
            <div className="social">
              <i className="fa-brands fa-spotify socialIcon"></i>
              <input
                type="text"
                className="socialLink"
                placeholder="Enter URL"
                value={socialLinks.spotify}
                onChange={(e) => handleSocialLinkChange(e, "spotify")}
              />
              {socialLinkErrors.spotify && (
                <span className="error">{socialLinkErrors.spotify}</span>
              )}
            </div>
            <div className="social">
              <i className="fa-brands fa-soundcloud socialIcon"></i>
              <input
                type="text"
                className="socialLink"
                placeholder="Enter URL"
                value={socialLinks.soundcloud}
                onChange={(e) => handleSocialLinkChange(e, "soundcloud")}
              />
              {socialLinkErrors.soundcloud && (
                <span className="error">{socialLinkErrors.soundcloud}</span>
              )}
            </div>
          </div>
          <div className="editAbout">
            <h3>About</h3>
            <textarea name="" id=""></textarea>
          </div>
          <div className="editProfileActionButtons">
            <button onClick={handleNavBack}>Cancel</button>
            <button type="submit">Apply Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
