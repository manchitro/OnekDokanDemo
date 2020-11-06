import React, { useState } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import HeaderContext from "./contexts/HeaderContext";
import ProfileContext from "./contexts/ProfileContext";

import HomePage from "./pages/homePage/homePage.component";
import LoginPage from "./pages/loginPage/loginPage.component";
import SignUpPage from "./pages/signupPage/signupPage.component";

import { Navigation } from "./components/navigation/navigation.component";
import { Sidebar } from "./components/sidebar/sidebar.component";

function App() {
  const [currentPage, setCurrentPage] = useState("HomePage");
  const [sidebarVisibility, setSidebarVisibility] = useState(true);
  const [profileName, setProfileName] = useState("Asef Hossain Khan");
  const [profilePicLink, setProfilePicLink] = useState(
    "https://www.biography.com/.image/t_share/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg"
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const HeaderState = {
    currentPage,
    setCurrentPage,
    sidebarVisibility,
    setSidebarVisibility,
  };

  const ProfileState = {
    profileName,
    setProfileName,
    profilePicLink,
    setProfilePicLink,
    isUserLoggedIn,
    setIsUserLoggedIn,
  };

  return (
    <div className="App">
      <HeaderContext.Provider value={HeaderState}>
        <ProfileContext.Provider value={ProfileState}>
          <Navigation />
          <Sidebar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/login"
                render={() =>
                  isUserLoggedIn ? <Redirect to="/" /> : <LoginPage />
                }
              />
              <Route exact path="/signup" component={SignUpPage} />
            </Switch>
          </div>
        </ProfileContext.Provider>
      </HeaderContext.Provider>
    </div>
  );
}

export default App;
