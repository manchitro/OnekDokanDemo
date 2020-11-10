import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import ProfileContext from "../../contexts/ProfileContext";

import ShopKeeperNew from "../shopKeeperNew/shopKeeperNew.component";
import ShopKeeperCategory from "../shopKeeperCategory/shopKeeperCategory.component";
import ShopKeeperProduct from "../shopKeeperProduct/shopKeeperProduct.component";
import ShopKeeperPanel from "../shopKeeperPanel/shopKeeperPanel.component";

const ShopkeeperRouter = ({ component: Component, ...rest }) => {
  const { isUserShopKeeper } = useContext(ProfileContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserShopKeeper === true ? (
          <>
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
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ShopkeeperRouter;
