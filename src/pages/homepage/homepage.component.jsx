import React, { useContext } from "react";
import ProfileContext from "../../contexts/ProfileContext";

import "./homePage.styles.scss";

const HomePage = () => {
  const { isUserLoggedIn } = useContext(ProfileContext);
  return (
    <div className="containers">
      {isUserLoggedIn ? "USER IS LOGGED IN" : "USER IS NOT LOGGED IN"}
    </div>
  );
};

export default HomePage;
