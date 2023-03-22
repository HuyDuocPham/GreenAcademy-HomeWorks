import { useState } from "react";

const App = () => {
  const [sum, setSum] = useState(0);

  const onChange = (e) => {
    setSum(sums(e.target.value))
  };
  
  var result = 0;
  const sums = (str) => {
    for ( let i = 0; i< str.length; i++) {
      result += Number(str[i])
    }
    return result
  }

  return (
    <div>
      <input placeholder="Numbers" onChange={onChange} />
      <button>{sum}</button>
    </div>
  );
};

export default App;
