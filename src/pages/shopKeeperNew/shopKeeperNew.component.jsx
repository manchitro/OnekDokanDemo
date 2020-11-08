import React from "react";
import "./shopKeeperNew.styles.scss";

import FormInput from "../../components/form-input/form-input.component";

const shopKeeperNew = () => {
  return (
    <div>
      <h1>Create new Shop</h1>
      <FormInput>Shop Name</FormInput>
    </div>
  );
};

export default shopKeeperNew;
