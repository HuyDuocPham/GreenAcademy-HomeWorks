import { useState } from "react";
import Users from "./Users";

const App = () => {
  const [users] = useState([
    { name: "user1", email: "user1@gmail.com" },
    { name: "user2", email: "user2@gmail.com" },
    { name: "user3", email: "user3@gmail.com" },
  ]);

  return (
    <div>
      <Users users={users} />
    </div>
  );
};
export default App;
