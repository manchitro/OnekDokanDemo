import React, { useContext } from "react";
import ProfileContext from "../../contexts/ProfileContext";

const HomePage = () => {
  const { isUserLoggedIn } = useContext(ProfileContext);
  return <div>{isUserLoggedIn ? "USER IS LOGGED IN" : "USER IS NOT LOGGED IN"}</div>;
};

export default HomePage;
