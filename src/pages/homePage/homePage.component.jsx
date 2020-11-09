import React, { useContext } from "react";
import ProfileContext from "../../contexts/ProfileContext";
import TileSection from "../../components/tile-section/tile-section.component";

import "./homePage.styles.scss";
import ShopList from "./homePage.data";

const HomePage = () => {
  const { isUserLoggedIn } = useContext(ProfileContext);
  return (
    <div className="containers">
      {/* {isUserLoggedIn ? "USER IS LOGGED IN" : "USER IS NOT LOGGED IN"} */}
      <TileSection sectionName="Featured Shops" ShopList={ShopList} />
    </div>
  );
};

export default HomePage;
