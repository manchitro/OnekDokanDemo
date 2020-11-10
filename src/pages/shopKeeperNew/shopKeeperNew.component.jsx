import React from "react";
import { Link } from "react-router-dom";
import "./shopKeeperNew.styles.scss";

import FormInput from "../../components/form-input/form-input.component";

const shopKeeperNew = () => {
  return (
    <div className="shop-keeper-new">
      <h1>Shop Name</h1>
      <FormInput>Shop Name</FormInput>
      <Link to="/shopkeeper/category">Done</Link>
    </div>
  );
};

export default shopKeeperNew;
