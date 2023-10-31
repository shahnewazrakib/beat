import Logo from "../../assets/logo.png";
import { GrSearch } from "react-icons/gr";
import { IoCart } from "react-icons/io5";

function Header() {
  return (
    <header className="py-8">
      <nav className="container flex items-center justify-between">
        <picture>
          <img src={Logo} alt="Beat" className="w-[100px]" />
        </picture> 
        <menu className="flex items-center gap-14">
          <a href="#home">Home</a>
          <a href="#feature">Feature</a>
          <a href="#gallery">Gallery</a>
          <a href="#purchase">Purchase</a>
          <a href="#review">Review</a>
        </menu>
        <div className="flex items-center text-xl gap-8">
          <GrSearch />
          <IoCart />
        </div>
      </nav>
    </header>
  );
}

export default Header;
