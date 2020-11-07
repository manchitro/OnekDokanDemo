import React, { useState } from "react";
import "./adminShop.styles.scss";
import SHOP_DATA from "./adminShop.data";
import CustomButton from "../../components/custom-button/custom-button.component";

const AdminShop = () => {
  const [shopData] = useState(SHOP_DATA);
  return (
    <div>
      <h1>This is the shop list</h1>
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

export default AdminShop;
