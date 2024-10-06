import { useSetRecoilState } from "recoil";
import { addToCart, removeFromCart, shoppingList } from "../utils/ShoppingCart";
import { PersonIcon, StarIcon } from "./ProductCard";
import { shoppingCartState } from "../utils/Recoil";
import QuantityAdjustor from "./QuantityAdjustor";

type PropTypes = {
  cartItem: shoppingList;
};

export default function CartItem({ cartItem }: PropTypes) {
  const setCart = useSetRecoilState(shoppingCartState);
  return (
    <div className="flex shadow-5 rounded-lg gap-4 items-center px-3 py-4">
      <img src={cartItem.product.image} alt="" className="w-36 flex-1" />
      <div className="flex flex-col flex-2">
        <p className="text-xl font-extrabold text-logo-blue mb-3">
          {cartItem.product.title}
        </p>
        <p className="font-bold text-sm text-logo-blue mb-3">
          {cartItem.product.description}
        </p>
        <p className="bg-logo-green text-logo-blue self-start px-4 py-2 rounded-3xl font-bold mb-3">
          {cartItem.product.category}
        </p>
        <p className="flex items-center gap-3 text-lg font-bold text-logo-blue">
          <span className="flex items-center gap-1">
            <span>
              <StarIcon />
            </span>
            <span>{cartItem.product.rating.rate}</span>
          </span>
          <span className="flex items-center gap-1">
            <span>
              <PersonIcon />
            </span>
            <span>{cartItem.product.rating.count}</span>
          </span>
        </p>
        <div className="flex items-center justify-end gap-5">
          <span className="me-auto font-bold text-lg text-logo-blue flex gap-1 items-center">
            <span className="text-logo-green">$</span>
            <span>{cartItem.product.price.toFixed(2)}</span>
          </span>
          <QuantityAdjustor
            value={cartItem.count}
            incrimentHandler={() => {
              setCart(addToCart(cartItem.product));
            }}
            decrimentHandler={() => {
              setCart(removeFromCart(cartItem.product.id));
            }}
          />
          <button
            onClick={(_) => {
              setCart(removeFromCart(cartItem.product.id, true));
            }}
            className="bg-red-600 text-white text-lg font-bold px-2 py-1 rounded-lg"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}
