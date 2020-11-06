import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../../components/form-input/form-input.component";

import CustomButton from "../../components/custom-button/custom-button.component";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./loginPage.styles.scss";

const LoginPage = () => {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(uid);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit} className="login-form">
        <FormInput
          type="text"
          name="uid"
          value={uid}
          handleChange={(e) => setUid(e.target.value)}
          placeholder="Email or Username"
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          required
        />

        <FormInput
          type="checkBox"
          name="rememberMe"
          handleChange={(e) => setRememberMe(e.target.value)}
          value={rememberMe}
        >
          Remember Me
        </FormInput>

        <div className="buttons">
          <Link className="forgot-password">Forgot Password?</Link>
          <CustomButton type="submit" value="Submit Form">
            Login
          </CustomButton>
          {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton> */}
          <Link className="create-account" to="/signup">
            Create an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
