import React from "react";
import "./account.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Link } from "react-router-dom";


const Account = () => {
  return (
    <div className="bigContainer">
      <div class="container">
        <div id="profile-img">
          <img
            src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
            alt="profile image"
          />
        </div>
      </div>
      <div id="student-info">
        <form name="studentForm" id="studentForm">
          <h4>Profile Information</h4>

          <label for="UserName">User Name</label>
          <br />
          <FormInput
            type="text"
            name="studentName"
            id="studentName"
            value="Sensei Khan"
          />
          <br/>
          <label for="Firstname">First Name</label>
          <br />
          <FormInput type="text" name="username" id="username" value="Sensei" />
          <br/>
          <label for="Lastname">last Name</label>
          <br/>
          <FormInput type="text" value="Khan" />
          <br/>
          <label for="email">Email</label>
          <br/>
          <FormInput type="email" value="SKhan@gmail.com" />
          <br />
          <label for="Phone">Phone</label>
          <br />
          <FormInput type="text" value="65169546541" />
          <br />
          <label for="Address">Address</label>
          <br />
          <FormInput type="text" value="bazidpur, kishorgonjo" />
          <CustomButton type="button">
            <Link to="/account/edit" className="links">Edit Profile</Link>
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Account;