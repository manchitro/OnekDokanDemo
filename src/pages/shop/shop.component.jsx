import React from "react";
import { Route } from "react-router-dom";

import ShopHomePage from "../shopHomePage/shopHomePage.component";
import CategoryPage from "../categoryPage/categoryPage.component";
// import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={ShopHomePage} />
    <Route path={`${match.path}/category`} component={CategoryPage} />
    <Route exact path={`${match.path}/category/:collectionId`} component={CategoryPage} values={`:collectionId`} />
  </div>
);

export default ShopPage;
