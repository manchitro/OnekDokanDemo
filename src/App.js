import React, { useState, useEffect } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";

import HeaderContext from "./contexts/HeaderContext";
import ProfileContext from "./contexts/ProfileContext";

import HomePage from "./pages/homePage/homePage.component";
import LoginPage from "./pages/loginPage/loginPage.component";
import SignUpPage from "./pages/signupPage/signupPage.component";
import AdminShopKeeperList from "./pages/adminShopKeeperList/adminShopKeeperList.component";
import AdminShop from "./pages/adminShop/adminShop.component";
import AdminProducts from "./pages/adminProducts/adminProducts.component";
import AdminCustomers from "./pages/adminCustomer/adminCustomer.component";
import ShopKeeperNew from "./pages/shopKeeperNew/shopKeeperNew.component";
import ShopKeeperCategory from "./pages/shopKeeperCategory/shopKeeperCategory.component";
import ShopKeeperProduct from "./pages/shopKeeperProduct/shopKeeperProduct.component";
import Account from "./pages/account/account.component";
import AccountEdit from "./pages/accountEdit/accountEdit.component";
import AdminPanel from "./pages/adminPanel/adminPanel.component";
import ShopKeeperPanel from "./pages/shopKeeperPanel/shopKeeperPanel.component";

import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Navigation from "./components/navigation/navigation.component";
import { Sidebar } from "./components/sidebar/sidebar.component";

function App() {
  const [currentPage, setCurrentPage] = useState("HomePage");
  const [sidebarVisibility, setSidebarVisibility] = useState(true);
  const [profileName, setProfileName] = useState("Asef Hossain Khan");
  const [profilePicLink, setProfilePicLink] = useState(
    "https://www.biography.com/.image/t_share/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg"
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [isUserShopKeeper, setIsUserShopKeeper] = useState(false);
  const [isCartHidden, setIsCartHidden] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("login-status");
    if (data) {
      setIsUserLoggedIn(JSON.parse(data));
      const adminData = localStorage.getItem("admin-status");
      const shopKeeperData = localStorage.getItem("shopKeeper-status");
      if (adminData) {
        setIsUserAdmin(JSON.parse(adminData));
      }
      if (shopKeeperData) {
        setIsUserShopKeeper(JSON.parse(shopKeeperData));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("login-status", JSON.stringify(isUserLoggedIn));
  }, [isUserLoggedIn]);

  useEffect(() => {
    localStorage.setItem("admin-status", JSON.stringify(isUserAdmin));
  }, [isUserAdmin]);

  useEffect(() => {
    localStorage.setItem("shopKeeper-status", JSON.stringify(isUserShopKeeper));
  }, [isUserShopKeeper]);

  const HeaderState = {
    currentPage,
    setCurrentPage,
    sidebarVisibility,
    setSidebarVisibility,
    isCartHidden,
    setIsCartHidden,
  };

  const ProfileState = {
    profileName,
    setProfileName,
    profilePicLink,
    setProfilePicLink,
    isUserLoggedIn,
    setIsUserLoggedIn,
    setIsUserShopKeeper,
    isUserShopKeeper,
    setIsUserAdmin,
    isUserAdmin,
  };

  return (
    <div className="App">
      <HeaderContext.Provider value={HeaderState}>
        <ProfileContext.Provider value={ProfileState}>
          <Navigation />
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              {isUserLoggedIn && <Redirect exact path="/login" to="/" />}
              <Route exact path="/login" component={LoginPage} />
              {isUserLoggedIn && <Redirect exact path="/signup" to="/" />}
              <Route exact path="/signup" component={SignUpPage} />
              
              {/* {(!isUserAdmin) && (<Redirect exact path="/admin" to="/" />)} */}
              <Route exact path="/admin" component={AdminPanel} />
              <Route
                exact
                path="/admin/ShopKeepers"
                component={AdminShopKeeperList}
              />
              <Route exact path="/admin/Shops" component={AdminShop} />
              <Route exact path="/admin/products" component={AdminProducts} />
              <Route exact path="/admin/customers" component={AdminCustomers} />
              
              {/* {!isUserShopKeeper && (
                <Redirect exact path="/sho
                pkeeper" to="/" />
              )} */}
              <Route exact path="/shopKeeper" component={ShopKeeperPanel} />
              <Route exact path="/shopKeeper/new" component={ShopKeeperNew} />
              <Route
                exact
                path="/shopKeeper/product"
                component={ShopKeeperProduct}
              />
              <Route
                exact
                path="/shopKeeper/category"
                component={ShopKeeperCategory}
              />
              <Route path="/shops" component={ShopPage} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/account/edit" component={AccountEdit} />
              <Route exact path="/checkout" component={CheckoutPage} />
            </Switch>
          </div>
          <Sidebar />
        </ProfileContext.Provider>
      </HeaderContext.Provider>
    </div>
  );
}

export default App;
