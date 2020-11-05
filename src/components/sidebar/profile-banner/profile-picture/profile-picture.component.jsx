import React, {useContext} from "react";
import ProfileContext from "../../../../contexts/ProfileContext";

import {EditButton} from "./edit-button/edit-button.component";

import "./profile-picture.styles.css";

export const ProfilePicture = () => {
    const {profilePicLink} = useContext(ProfileContext);
    
    return <div className="profilePicture">
        <img src={profilePicLink} alt="ProfilePicture" />
        <EditButton></EditButton>
    </div>
};