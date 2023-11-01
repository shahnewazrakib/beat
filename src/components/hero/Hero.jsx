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
    <section className="container flex items-center lg:flex-row flex-col">
      <div className="flex flex-col gap-4  lg:items-start items-center lg:mt-0 mt-6 lg:text-left text-center">
        <label className="bg-red/10 text-red text-xs sm:text-sm py-1 px-5 rounded-full font-medium w-max">
          Big Sale
        </label>
        <h1 className="text-2xl sm:text-5xl 2xl:text-6xl font-semibold leading-tight 2xl:leading-[70px]">
          Great Sounds With <br /> Solo Headphones
        </h1>
        <p className="lg:w-[85%] text-dark_gray leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="flex items-center sm:flex-row flex-col gap-4 sm:gap-8">
          <div className="sm:border-r-[2px] border-gray sm:pr-10">
            <p className="text-2xl font-medium text-dark_gray">$45.99</p>
          </div>
          <dir>
            <button className="border border-black rounded-lg py-2 px-4 flex items-center gap-x-2 bg-white hover:bg-black hover:text-white transition duration-200">
              <span className="text-sm font-medium">Buy Now</span>
              <BiSolidShoppingBag />
            </button>
          </dir>
        </div>
        <div className="flex items-center gap-4 pt-4 sm:pt-6">
          {headphones.map((headphone, index) => {
            return (
              <div key={index}>
                <img
                  src={headphone}
                  onClick={() => setActiveHeadpone(index)}
                  className="sm:w-[100px] cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>
      <picture className="sm:pt-0 pt-6">
        <img src={headphones[activeHeadphone]} alt="Headphone" />
        <span id="feature"></span>
      </picture>
    </section>
  );
}

export default Hero;
