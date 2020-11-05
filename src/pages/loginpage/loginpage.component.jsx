import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";

import CustomButton from "../../components/custom-button/custom-button.component";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./loginpage.styles.scss";

const LoginPage = () => {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(uid);
  };

  return (
    <div className="login">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="uid"
          value={uid}
          handleChange={(e) => setUid(e.target.value)}
          label="Username/Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={(e) => setPassword(e.target.value)}
          value={password}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            Login
          </CustomButton>
          {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton> */}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
