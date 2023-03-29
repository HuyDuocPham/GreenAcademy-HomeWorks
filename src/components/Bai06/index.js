import { useState } from "react";
import GetInput from "./GetInput";
import ListsInput from "./ListsInput";

const App = () => {
  const [inputs, setInput] = useState([{ number: 0 }, { text: "" }]);
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setInput({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = (inputs) => {
    const newArr = [];
    for (let i = 0; i < Number(inputs.number); i++) {
      newArr.push(inputs.text);
    }
    setList(newArr);
  };

  return (
    <div>
      <GetInput onChange={onChange} />
      <button onClick={onClick}>Click Me</button>
      <ListsInput list={list} />
    </div>
  );
};

export default App;
