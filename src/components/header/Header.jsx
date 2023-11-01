import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { GrSearch } from "react-icons/gr";
import { IoCart } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import {LiaTimesSolid} from 'react-icons/lia';

function Header() {
  const [sticky, setSticky] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 50){
        setSticky(true);
      }else{
        setSticky(false);
      }
    })
  })
  return (
    <header className={`py-5 sm:py-6 lg:py-8 bg-white ${sticky && 'shadow-default'} sticky top-0 z-50`}>
      <nav className="container flex items-center justify-between">
        <picture>
          <img src={Logo} alt="Beat" className="w-[80px] lg:w-[100px]" />
        </picture>
        <menu className={`flex items-center md:flex-row flex-col gap-8 lg:gap-14 md:relative md:pb-0 pb-8 md:pt-0 pt-4 absolute md:bg-transparent bg-white md:w-auto w-screen md:left-auto left-0 md:top-auto top-16 md:shadow-none shadow-md origin-top ${openMobileMenu ? 'scale-y-100' : "scale-y-0"} md:scale-y-100 transition duration-200`}>
          <a href="#home">Home</a>
          <a href="#feature">Feature</a>
          <a href="#gallery">Gallery</a>
          <a href="#purchase">Purchase</a>
          <a href="#review">Review</a>
          <div className="flex md:hidden items-center text-xl gap-8">
            <GrSearch />
            <IoCart />
          </div>
        </menu>
        <div className="hidden md:flex items-center text-xl gap-8">
          <GrSearch />
          <IoCart />
        </div>
        {
          !openMobileMenu ? 
          <RiMenu3Line onClick={() => setOpenMobileMenu(true)} className="text-2xl md:hidden block" />
          : 
          <LiaTimesSolid onClick={() => setOpenMobileMenu(false)} className="text-2xl md:hidden block" />
        }
      </nav>
    </header>
  );
}

export default Header;
