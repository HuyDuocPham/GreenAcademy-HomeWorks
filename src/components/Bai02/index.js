const App = () => {

  const onClick = () => {
    alert("Đăng nhập thành công");
  };
  return (
    <>
      <input name="name" placeholder="Name." />
      <input name="email" placeholder="Email." />
      <button onClick={onClick}>Log In</button>
    </>
  );
};

export default App;
