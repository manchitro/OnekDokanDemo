import React, { useState } from "react";
import "./adminProducts.styles.scss";
import PRODUCT_DATA from "./adminProducts.data";
import CustomButton from "../../components/custom-button/custom-button.component";

const AdminProducts = () => {
  const [data] = useState(PRODUCT_DATA);
  return (
    <div>
      <h1>This is the product list</h1>
      <table>
        <tbody>
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
