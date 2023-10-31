import { useState } from "react";
import RosegoldHeadphone from "../../assets/rosegold-headphone.jpg";
import YellowHeadphone from "../../assets/yellow-headphone.png";
import RedHeadphone from "../../assets/red-headphone.jpg";
import BlackHeadphone from "../../assets/black-headphone.jpg";
import { BiSolidShoppingBag } from "react-icons/bi";

function Hero() {
  const [activeHeadphone, setActiveHeadpone] = useState(0);

  const headphones = [
    YellowHeadphone,
    RosegoldHeadphone,
    RedHeadphone,
    BlackHeadphone,
  ];

  return (
    <section className="container flex items-center">
      <div className="space-y-4">
        <label className="bg-red/10 text-red text-sm py-1 px-5 rounded-full font-medium">
          Big Sale
        </label>
        <h1 className="text-6xl font-semibold leading-[70px]">
          Great Sounds With <br /> Solo Headphones
        </h1>
        <p className="w-[85%] text-dark_gray leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="flex items-center gap-8">
          <div className="border-r-[2px] border-gray pr-10">
            <p className="text-2xl font-medium text-dark_gray">$45.99</p>
          </div>
          <dir>
            <button className="border border-black rounded-lg py-2 px-4 flex items-center gap-x-2 bg-white hover:bg-black hover:text-white transition duration-200">
              <span className="text-sm font-medium">Buy Now</span>
              <BiSolidShoppingBag />
            </button>
          </dir>
        </div>
        <div className="flex items-center gap-4 pt-6">
          {headphones.map((headphone, index) => {
            return <img key={index} src={headphone} onClick={() => setActiveHeadpone(index)} className="w-[100px] cursor-pointer" />;
          })}
        </div>
      </div>
      <picture>
        <img src={headphones[activeHeadphone]} alt="Headphone" />
      </picture>
    </section>
  );
}

export default Hero;
