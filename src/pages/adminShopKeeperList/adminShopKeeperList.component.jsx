import React, { useState } from "react";
import "./adminShopKeeperList.styles.scss";
import SHOP_KEEPER_DATA from "./shopKeeper.data";
import CustomButton from "../../components/custom-button/custom-button.component";
import SectionTitle from "../../components/section-title/section-title.component";

const AdminShopKeeperList = () => {
  const [shopData] = useState(SHOP_KEEPER_DATA);
  return (
    <div className="admin-shop-keeper">
      <SectionTitle sectionTitle="ShopKeeper List" />
      <table className="shopkeeper-list-table">
        <tbody>
          <tr>
            <th>ShopKeeper Name</th>
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

export default AdminShopKeeperList;
