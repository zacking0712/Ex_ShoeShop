import ShoeItem from "./ShoeItem";

const ListShoe = ({ listShoe, addShoeCart }) => {
  console.log(listShoe);
  // Mang giao diện các item đôi giày đưa vào bên trong component shoeItem và quản lí
  return (
    <div>
      {/* danh sách giày */}
      <div className="list_shoe grid grid-cols-3 gap-5">
        {listShoe.map((shoe, index) => {
          return (
            <ShoeItem addShoeCart={addShoeCart} itemShoe={shoe} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default ListShoe;
