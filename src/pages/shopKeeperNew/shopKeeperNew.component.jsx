import React from "react";
import { Link } from "react-router-dom";
import "./shopKeeperNew.styles.scss";

import SectionTitle from "../../components/section-title/section-title.component";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const shopKeeperNew = () => {
  return (
    <div className="containers">
      <div className="shop-keeper-new">
        <SectionTitle sectionTitle="Change Shop Name"></SectionTitle>
        <FormInput value="Crown Clothing" placeholder="Shop Name"></FormInput>
        <Link to="/shopkeeper">
          <CustomButton>Save</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default shopKeeperNew;
