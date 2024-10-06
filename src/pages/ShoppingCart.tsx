import { useRecoilValue } from "recoil";
import { shoppingCartState, shoppingCartTotalCostState } from "../utils/Recoil";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

export default function ShoppingCart() {
  const cart = useRecoilValue(shoppingCartState);
  const total = useRecoilValue(shoppingCartTotalCostState);
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-3 px-5 py-3">
        <h1 className="text-4xl font-black underline decoration-logo-green decoration-4 text-logo-blue">
          Your Items
        </h1>
        <div className="flex justify-evenly">
          <div className="max-w-screen-md flex flex-col gap-5">
            {cart.length == 0
              ? (
                <div className="flex flex-col gap-5 items-center justify-center">
                  <h2 className="text-4xl font-extrabold text-center">
                    Your cart is Empty
                  </h2>
                  <NavLink
                    to="/"
                    className="px-6 py-2 rounded-3xl text-lg font-bold bg-logo-blue text-white"
                  >
                    Shop
                  </NavLink>
                </div>
              )
              : cart.map((item) => (
                <CartItem
                  cartItem={item}
                  key={item.product.id}
                />
              ))}
          </div>
          <div className="shadow-5 sticky top-0 self-start rounded-3xl flex flex-col gap-2 w-2/12 px-4 py-4 text-logo-blue">
            <p className="text-2xl font-extrabold mb-4">
              Summary
            </p>
            <hr className="w-full h-1 bg-logo-blue" />
            <div className="">
              <span className="flex items-center justify-between">
                <p className="text-xl font-bold">Total:</p>
                <p className="flex items-center justify-center gap-1">
                  <span className="text-lg font-extrabold">$</span>
                  <span className="font-extrabold">{total.toFixed(2)}</span>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
