const GetInput = (props) => {
  return (
    <div>
      <input
        name="number"
        onChange={props.onChange}
        value={props.inputs.number}
        placeholder="Nhập số lần muốn in: "
      />
      <input
        name="text"
        onChange={props.onChange}
        value={props.inputs.text}
        placeholder="Nhập đoạn text muốn in: "
      />
    </div>
  );
};

export default GetInput;
