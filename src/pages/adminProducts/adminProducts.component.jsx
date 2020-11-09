import React, { useState } from "react";
import "./adminProducts.styles.scss";
import PRODUCT_DATA from "./adminProducts.data";
import CustomButton from "../../components/custom-button/custom-button.component";
import SectionTitle from "../../components/section-title/section-title.component";

const AdminProducts = () => {
  const [data] = useState(PRODUCT_DATA);
  return (
    <div className="admin-products">
      <SectionTitle sectionTitle="Product List" />
      <table className="product-list-table">
        <tbody>
          <tr>
            <th>Shop Keeper</th>
            <th>Shop Name</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
          {data.map(({ id, shopKeeperName, shopName, productName }) => (
            <tr key={id}>
              <td>{shopKeeperName}</td>
              <td>{shopName}</td>
              <td>{productName}</td>
              <td>
                <CustomButton type="button">Remove the product</CustomButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
