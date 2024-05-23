import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-center items-center mx-auto my-0 w-6/12 flex-col">
      <h1 className=" font-bold">Cart</h1>
      {cartItem.map((item) => (
        <ItemList rcCard={item} />
      ))}
    </div>
  );
};

export default Cart;
