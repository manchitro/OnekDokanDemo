import React, { useContext } from "react";
import ProfileContext from "../../../../contexts/ProfileContext";

import "./profile-name.styles.css";

export const ProfileName = () => {
  const { profileName } = useContext(ProfileContext);

  return <div className="profileName">{profileName}</div>;
};
