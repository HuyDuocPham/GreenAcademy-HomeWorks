import { useState } from "react";
import Products from "../Products";
const Users = (props) => {
  const [products] = useState([
    { name: "Product1", price: 100 },
    { name: "Product2", price: 200 },
  ]);

  return (
    <div>
      {props.users.map((item) => {
        return (
          <tr>
            <td>Name: {item.name}</td>
            <td>Email: {item.email}</td>
            <Products products={products} />
          </tr>
        );
      })}
    </div>
  );
};

export default Users;
