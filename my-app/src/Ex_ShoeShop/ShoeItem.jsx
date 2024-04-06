const ShoeItem = ({ itemShoe, addShoeCart }) => {
  return (
    <div>
      <div className="border-2 p-5 rounded-md space-y-4">
        <img src={itemShoe.image} alt="" />
        <h2 className="text-2xl font-semibold">{itemShoe.name}</h2>
        <p className="text-lg text-gray-500">Giá tiền {itemShoe.price}</p>
        <button
          onClick={() => {
            addShoeCart(itemShoe);
          }}
          className="py-2 px-5 rounded-md text-white bg-black"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ShoeItem;
