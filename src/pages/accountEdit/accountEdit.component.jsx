import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import FormInput from "../../components/form-input/form-input.component";
import ProfileContext from "../../contexts/ProfileContext";

import CustomButton from "../../components/custom-button/custom-button.component";
// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./accountEdit.styles.scss";

const AccountEdit = () => {
  const { profileName } = useContext(ProfileContext);
  const [username, setUsername] = useState(profileName);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up">
      <h2>Edit Account</h2>
      <span>Edit your account</span>
      <form onSubmit={handleSubmit} className="signup-form">
        <FormInput
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <FormInput
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone no."
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Edit</CustomButton>
          {/* <Link className="create-account" to="/login">Have an account? Log in here</Link> */}
        </div>
      </form>
    </div>
  );
};

export default AccountEdit;