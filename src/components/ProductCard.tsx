import { useRecoilState } from "recoil";
import { Product } from "../myTypes";
import { shoppingCartState } from "../utils/Recoil";
import { addToCart, removeFromCart } from "../utils/ShoppingCart";
import QuantityAdjustor from "./QuantityAdjustor";
import { useEffect } from "react";

type propType = {
  product: Product;
};

export function PersonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 56 56"
    >
      <path
        fill="#08c076"
        fillRule="evenodd"
        d="M42.853 42.714q-.446-.06-.859-.125c-6.058-.963-6.667-3.117-7.457-4.768c-.642-.277-.957-.5-1.286-1.643c-.142-.488-.388-2.654-.284-3.498c.498-.467.876-1.653 1.04-2.204c.442-1.474.549-1.832.97-3.796c.06-.28.219-.394.348-.442c.392-.142.482-.457.61-.69c.303-.534.043-.774.516-2.077c.604-1.482.698-3.008.24-3.446c-.311-.277-.5-.07-.653-.014c-.102.04-.023-.215.069-.578c.363-1.493.365-2.758.463-4.288c.079-1.239-.004-2.369-.159-3.07c-.146-.145-.523-1.77-.955-2.72c-.738-1.632-2.95-1.885-3.708-2.212c-1.804-.755-4.06-1.778-6.734-.623c-1.19.513-2.775.563-4.5 2.504c-.408.456-1.136.064-1.949 1.84c-.825 1.74-.869 2.886-.681 4.13l-.057.003s.021 2.977.386 4.47c.09.364.167.617.067.579c-.152-.056-.361-.236-.672.042c-.46.438-.216 1.901.388 3.383c.476 1.303.159 1.691.665 2.377c.18.244.348.373.542.455c.13.052.313.068.398.34c.557 2.02.66 2.64 1.239 3.842c.25.519.531 1.818 1.049 2.322c.085.711-.003 2.76-.115 3.371c-.18.961-.517 1.239-1.422 1.643c-.492 1.6-1.797 3.048-7.255 4.722q-.28.086-.571.171q-.156.052-5.545 4.783A2 2 0 0 0 8.301 51h38.907a2 2 0 0 0 1.289-3.53z"
      />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 72 72"
    >
      <path
        fill="#fcea2b"
        d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
      />
    </svg>
  );
}

export default function ProductCard({ product }: propType) {
  /*   const icon1=<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#08c076" stroke="#1d3665" strokeLinejoin="round" strokeWidth="4" d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"/></svg> */
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);
  let found = shoppingCart.find((item) => item.product.id === product.id);
  useEffect(() => {
    found = shoppingCart.find((item) => item.product.id === product.id);
  }, [shoppingCart]);

  // console.log(shoppingCart)
  function addToCartHandler() {
    const cart = addToCart(product);
    // console.log(cart)
    setShoppingCart(cart);
  }
  return (
    <div className="text-wrap mx-2 my-4 w-72 h-100 px-3 py-3 shadow-3 rounded-xl overflow-hidden">
      <div className="flex flex-col justify-between h-full">
        <img
          src={product.image}
          alt={product.title}
          className="h-4/6 self-center mb-2"
        />
        <div className="h-full max-h-36 flex flex-col justify-around text-logo-blue font-bold">
          <p className="text-sm hover:underline decoration-logo-green decoration-2 underline-offset-2">
            {product.title}
          </p>
          {
            /*<p>
          {product.description}
        </p> */
          }
          <p className="flex items-center gap-5">
            <span className="flex items-center gap-1 text-lg">
              <span className="">
                <StarIcon />
              </span>
              <span className="font-bold">
                {product.rating.rate}
              </span>
            </span>
            <span className="flex items-center gap-1 text-lg">
              <span className="">
                <PersonIcon />
              </span>
              <span>
                {product.rating.count}
              </span>
            </span>
          </p>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <span className="text-xl">$</span>
              <span>{product.price}</span>
            </p>
            {found
              ? (
                <QuantityAdjustor
                  value={found.count}
                  incrimentHandler={() => {
                    addToCartHandler();
                  }}
                  decrimentHandler={() => {
                    const newCart = removeFromCart(product.id);
                    setShoppingCart(newCart);
                  }}
                />
              )
              : (
                <button
                  className="bg-logo-blue text-white px-2 rounded-lg text-sm"
                  onClick={(_) => addToCartHandler()}
                >
                  Add to Cart
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
