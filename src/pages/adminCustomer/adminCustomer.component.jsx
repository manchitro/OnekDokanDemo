import React, { useState } from "react";
import "./adminCustomer.styles.scss";
import CUSTOMER_DATA from "./adminCustomer.data";
import CustomButton from "../../components/custom-button/custom-button.component";
import SectionTitle from "../../components/section-title/section-title.component";

const AdminCustomers = () => {
  const [data] = useState(CUSTOMER_DATA);
  return (
    <div className="admin-customers">
      <SectionTitle sectionTitle="Customer List" />
      <table className="customer-list-table">
        <tbody>
          <tr>
            <th>Customer Name</th>
            <th>Action</th>
          </tr>
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
