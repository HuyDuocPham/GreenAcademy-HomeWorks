const ListsInput = (props) => {
  return (
    <div>
      {props.list.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};
export default ListsInput;
