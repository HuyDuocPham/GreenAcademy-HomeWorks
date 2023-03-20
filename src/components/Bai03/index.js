import { useState } from "react";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const onChange = (e) => {
    setNumbers([
        ...numbers, 
        [e.target.value]
    ]);
    setSum( sum + Number(e.target.value))
  };

  return (
    <div>
      <input placeholder="Numbers" onChange={onChange} />
      <button>{sum}</button>
    </div>
  );
};

export default App;
