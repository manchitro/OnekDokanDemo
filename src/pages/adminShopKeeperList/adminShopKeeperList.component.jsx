import React, { useState } from "react";
import "./adminShopKeeperList.styles.scss";
import SHOP_KEEPER_DATA from "./shopKeeper.data";
import CustomButton from "../../components/custom-button/custom-button.component";

const AdminShopKeeperList = () => {
  const [shopData] = useState(SHOP_KEEPER_DATA);
  return (
    <div>
      <h1>This is the admin shop keeper list</h1>
      <table>
        <tbody>
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
