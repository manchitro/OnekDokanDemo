import React, { useContext } from "react";
import ProfileContext from "../../contexts/ProfileContext";
import TileSection from "../../components/tile-section/tile-section.component";

import "./homePage.styles.scss";

const ShopList = [
  {
    id: 1,
    name: "Crown Clothing",
    imageLink: "https://pbs.twimg.com/profile_images/675395159689949184/wOYPVW0l.jpg",
  },
  {
    id: 2,
    name: "Crown Clothing",
    imageLink: "https://pbs.twimg.com/profile_images/675395159689949184/wOYPVW0l.jpg",
  },
  {
    id: 3,
    name: "Crown Clothing",
    imageLink: "https://pbs.twimg.com/profile_images/675395159689949184/wOYPVW0l.jpg",
  },
]

const HomePage = () => {
  const { isUserLoggedIn } = useContext(ProfileContext);
  return (
    <div className="containers">
      {/* {isUserLoggedIn ? "USER IS LOGGED IN" : "USER IS NOT LOGGED IN"} */}
      <TileSection sectionName="Featured Shops" ShopList={ShopList}/>
    </div>
  );
};

export default HomePage;
