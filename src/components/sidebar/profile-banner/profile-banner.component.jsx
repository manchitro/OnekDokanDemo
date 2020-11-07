import React from "react";

import { ProfilePicture } from "./profile-picture/profile-picture.component.jsx";
import { ProfileName } from "./profile-name/profile-name.component.jsx";
import { ProfileButton } from "./profile-button/profile-button.component.jsx";

import "./profile-banner.styles.css";

export const ProfileBanner = () => (
  <div className="profileBanner">
    <div className="profile-info">
      <ProfileName></ProfileName>
      <ProfileButton></ProfileButton>
    </div>
    <div className="profile-picture">
      <ProfilePicture></ProfilePicture>
    </div>
  </div>
);
