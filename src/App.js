import React, { useState, useEffect } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

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
  const [isCartHidden, setIsCartHidden] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("login-status");
    if (data) {
      setIsUserLoggedIn(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("login-status", JSON.stringify(isUserLoggedIn));
  }, [isUserLoggedIn]);

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
  };

  return (
    <div className="App">
      <HeaderContext.Provider value={HeaderState}>
        <ProfileContext.Provider value={ProfileState}>
          <Navigation />
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              {/* {isUserLoggedIn && <Redirect exact path="/login" to="/" />} */}
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route
                exact
                path="/admin/ShopKeeper"
                component={AdminShopKeeperList}
              />
              <Route exact path="/admin/Shop" component={AdminShop} />
              <Route exact path="/admin/Products" component={AdminProducts} />
              <Route exact path="/admin/customers" component={AdminCustomers} />
              <Route exact path="/shopKeeper/new" component={ShopKeeperNew} />
              <Route exact path="/shopKeeper/product" component={ShopKeeperProduct} />
              <Route exact path="/shopKeeper/category" component={ShopKeeperCategory} />
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
