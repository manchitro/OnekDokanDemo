import React, { useState } from "react";
import "./adminShop.styles.scss";
import SHOP_DATA from "./adminShop.data";
import CustomButton from "../../components/custom-button/custom-button.component";
import SectionTitle from "../../components/section-title/section-title.component";

const AdminShop = () => {
  const [shopData] = useState(SHOP_DATA);
  return (
    <div className="admin-shop">
      <SectionTitle sectionTitle="Shop List"/>
      <table className="shop-list-table">
        <tbody>
          <tr>
            <th>Shop Keeper</th>
            <th>Shop Name</th>
            <th>Action</th>
          </tr>
          {shopData.map(({ id, shopKeeperName, shopName, status }) => (
            <tr key={id}>
              <td>{shopKeeperName}</td>
              <td>{shopName}</td>
              <td>
                <CustomButton type="button">
                  {status === "active" ? "Ban the user" : "Unban the user"}
                </CustomButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminShop;
