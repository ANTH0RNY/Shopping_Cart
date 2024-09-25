import { NotoShoppingBags } from "./icons/ShoppingBags";
import img1 from "../assets/logo_6.png"

export default function Navbar(){
    return(
        <>
      <nav className="flex py-2 px-3 text-logo-blue text-lg items-center font-vite font-semibold hover:cursor-pointer bg-slate-100">
        <div className="">
          <img src={img1} alt="logo" className="h-[4rem]" />
        </div>
        <div className="ms-auto me-2 nav-item hover:cursor-pointer">Home</div>
        <div className="mx-2 nav-item hover:cursor-pointer">Shop</div>
        <div className="mx-2 nav-item hover:cursor-pointer">Categories</div>
        <div className="hover:cursor-pointer ms-5 nav-item border-b-4 border-b-transparent hover:border-b-logo-green">
          <NotoShoppingBags width={'2.5rem'} height={'2.5rem'}/>
        </div>
      </nav>
        </>
    )
}
