import React from "react";
import { Route } from "react-router-dom";

import ShopHomePage from "../shopHomePage/shopHomePage.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component.jsx";
import CategoryPage from "../categoryPage/categoryPage.component";

import "./shop.styles.scss"

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={ShopHomePage} />
    <Route
      exact
      path={`${match.path}/category`}
      component={CollectionOverview}
    />
    <Route
      exact
      path={`${match.path}/category/:collectionId`}
      component={CategoryPage}
    />
  </div>
);

export default ShopPage;
