import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuList from "./RestaurantMenuList";
import { clearItems } from "./components/utils.js/CartSlice";
const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems());
  };
  return (
    <div className="m-2 p-2   ">
      <div className="text-center flex justify-center m-1 p-2">
        <h1 className="font-bold text-2xl">this is cart section</h1>
        <button className="bg-black text-white p-2 rounded-lg ml-10" onClick={handleClearCart}>
          clearCart
        </button>
        
      </div>
     {CartItems.length === 0 && <h1 className="w=6/12 text-center font-bold text-3xl"> cart is empty please add Items here</h1>}
       
      <div className="m-auto w-6/12  p-4  bg-gray-100">
        <RestaurantMenuList items={CartItems} />
      </div>
    </div>
  );
};
export default Cart;
