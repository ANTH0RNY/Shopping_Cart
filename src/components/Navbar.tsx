import { NotoShoppingBags } from "./icons/ShoppingBags";
import img1 from "../assets/logo_6.png";
import { useRecoilValue } from "recoil";
import { shoppingCartCountState } from "../utils/Recoil";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const count = useRecoilValue(shoppingCartCountState);

  return (
    <>
      <nav className="flex py-2 px-3 text-logo-blue text-lg items-center font-vite font-semibold hover:cursor-pointer">
        <NavLink className="" to="/">
          <img src={img1} alt="logo" className="h-[4rem]" />
        </NavLink>
        <NavLink to="/" className="ms-auto me-2 nav-item hover:cursor-pointer">
          Home
        </NavLink>
        <a
          href="/#d-shopping-title"
          className="mx-2 nav-item hover:cursor-pointer"
        >
          Shop
        </a>
        <div className="mx-2 nav-item hover:cursor-pointer">Categories</div>
        <NavLink
          to="/cart"
          className="hover:cursor-pointer ms-5 nav-item border-b-4 pt-3 pr-2 border-b-transparent hover:border-b-logo-green relative"
        >
          <NotoShoppingBags width={"2.5rem"} height={"2.5rem"} />
          {count && count > 0
            ? (
              <span className="absolute top-0 right-0 font-extrabold text-white bg-logo-blue pl-1 pr-1.5 text-sm rounded-full">
                {count}
              </span>
            )
            : null}
        </NavLink>
      </nav>
    </>
  );
}
