import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import ProfileContext from "../../contexts/ProfileContext";

import AdminShopKeeperList from "../adminShopKeeperList/adminShopKeeperList.component";
import AdminShop from "../adminShop/adminShop.component";
import AdminProducts from "../adminProducts/adminProducts.component";
import AdminCustomers from "../adminCustomer/adminCustomer.component";
import AdminPanel from "../adminPanel/adminPanel.component";

const AdminRouter = ({ component: Component, ...rest }) => {
  const { isUserAdmin } = useContext(ProfileContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserAdmin === true ? (
          <>
            <Route exact path="/admin" component={AdminPanel} />
            <Route
              exact
              path="/admin/ShopKeepers"
              component={AdminShopKeeperList}
            />
            <Route exact path="/admin/Shops" component={AdminShop} />
            <Route exact path="/admin/products" component={AdminProducts} />
            <Route exact path="/admin/customers" component={AdminCustomers} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminRouter;
