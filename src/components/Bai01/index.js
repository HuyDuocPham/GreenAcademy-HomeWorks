import { useState } from "react";

const App = () => {
  const [lists] = useState([
    { name: "A", code: "1", price: 10 },
    { name: "B", code: "2", price: 20 },
    { name: "C", code: "3", price: 30 },
    { name: "D", code: "4", price: 40 },
  ]);
  return (
    <div>
      {lists.map((item) => {
        return (
          <tr>
            <td>Tên sản phẩm: {item.name}</td>
            <td>Mã sản phẩm: {item.code}</td>
            <td>Giá sản phẩm: {item.price}</td>
          </tr>
        );
      })}
    </div>
  );
};
export default App;
