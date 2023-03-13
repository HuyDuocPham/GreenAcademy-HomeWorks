import { useState } from "react";

const App = () => {
    const [list, setList] = useState({name: 'aaa', code: '111', price: 10})
//   const [lists, setLists] = useState([
//     { name: "A", code: "1", price: 10 },
//     { name: "B", code: "2", price: 20 },
//     { name: "C", code: "3", price: 30 },
//     { name: "D", code: "4", price: 40 },
//   ]);
  return (
        <div>
          <div>Tên sản phẩm: {list.name}</div>
          <div>Mã sản phẩm: {list.code}</div>
          <div>Giá sản phẩm: {list.price}</div>
        </div>
  );
};
export default App;
