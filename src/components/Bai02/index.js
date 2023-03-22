import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({name: "", email: ""})

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onClick = () => {
    alert("Đăng nhập thành công");
  }

  return (
    <div>
      <input name="name" value={user.name} placeholder="Name." onChange={onChange} />
      <input name="email" value={user.email} placeholder="Email." onchange={onChange} />
      <button onClick={onClick}>Log In</button>
    </div>
  );
};

export default App;