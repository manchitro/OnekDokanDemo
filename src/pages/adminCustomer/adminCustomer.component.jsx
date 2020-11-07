import React, { useState } from "react";
import "./adminCustomer.styles.scss";
import CUSTOMER_DATA from "./adminCustomer.data";
import CustomButton from "../../components/custom-button/custom-button.component";

const AdminCustomers = () => {
  const [data] = useState(CUSTOMER_DATA);
  return (
    <div>
      <h1>This is the Customer list</h1>
      <table>
        <tbody>
          {data.map(({ id, customerName, status }) => (
            <tr key={id}>
              <td>{customerName}</td>
              <td>
                <CustomButton type="button">
                  {status === "active"
                    ? "Ban the Customer"
                    : "Unban the Customer"}
                </CustomButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCustomers;
