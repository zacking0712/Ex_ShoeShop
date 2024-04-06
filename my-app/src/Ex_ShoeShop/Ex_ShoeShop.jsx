import { useState } from "react";
import ListShoe from "./ListShoe";
import Card_Modal from "./Card_Modal";

const Ex_ShoeShop = () => {
  // const { id } = useParams();
  // console.log(id);
  let [isOpen, setIsOpen] = useState(false);
  let [arrCart, setArrCart] = useState([]);
  console.log(arrCart);
  let arrShoe = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  console.log(arrShoe);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const addShoeCart = (shoe) => {
    // chia thành 2 trường hợp khi nhận được giày
    // TH1: khi đôi giày người dùng chọn chưa có trong arrCart, thêm giày vào arrCart và tạo một thuộc tính total quản lý số lượng người dùng chọn
    // TH2: khi đôi giày đã có trong giỏ hàng, thì sẽ thực hiện tăng giá trị mà thuộc tính total đang lưu trữ lên thêm một đơn vị

    // B1: Kiểm tra phần tử shoe có trong mảng chưa
    let check = arrCart.findIndex((item) => {
      return item.id == shoe.id;
    });
    console.log(check);
    let newArrCart = [...arrCart]; // Clone lại sản phẩm trong mảng
    if (check == -1) {
      // Trường hợp chưa có sản phẩm chưa có trong giỏ hàng
      newArrCart.push({ ...shoe, total: 1 }); // Clone lại các thuộc tính và thêm thuộc tính total
    } else {
      // Trường hợp chưa có sản phẩm có trong giỏ hàng
      newArrCart[check].total += 1;
    }
    setArrCart(newArrCart);
  };

  const deleteShoeCart = (shoeiD) => {
    console.log(shoeiD);
    console.log(arrCart);
    arrCart.forEach((item, index) => {
      if (shoeiD == item.id) {
        let newArrCart = [...arrCart];
        newArrCart.splice(index, 1);
        setArrCart(newArrCart);
      }
    });
  };

  // Tăng giảm số lượng
  const updateTotalShoeCard = (type, shoeiD) => {
    // type == plus >> + || type == minux >> -
    let index = arrCart.findIndex((item) => {
      return item.id == shoeiD;
    });
    if (index != -1) {
      let newArrCart = [...arrCart];
      let value = type == "plus" ? 1 : -1;
      newArrCart[index].total += value;
      setArrCart(newArrCart);
    }
  };
  return (
    <div className="container px-10 mx-auto py-10">
      <h1 className="font-bold text-3xl text-center">Bài tập danh sách giày</h1>

      {/* giỏ hàng */}
      <div className="shoe_cart">
        <button
          onClick={() => {
            openModal();
          }}
          className="py-2 px-5 text-white bg-orange-500 rounded-md"
        >
          Giỏ hàng <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>

      {/* List Shoe */}
      <ListShoe addShoeCart={addShoeCart} listShoe={arrShoe} />

      {/* Yêu cầu: thực hiện quản lý modal hiển thị danh sách sản phẩm đã chọn mua thông qua component card modal */}
      {/* Modal hiển thị giỏ hàng */}
      <Card_Modal
        updateTotalShoeCard={updateTotalShoeCard}
        deleteShoe={deleteShoeCart}
        arrCart={arrCart}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Ex_ShoeShop;
