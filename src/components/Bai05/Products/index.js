const Products = (props) => {

  return (
    <div>
      {props.products.map((item) => {
        return (
          <tr>
            <td>Tên sản phẩm: {item.name}</td>
            <td>Giá sản phẩm: {item.price}</td>
          </tr>
        );
      })}
    </div>
  );
};
export default Products;
