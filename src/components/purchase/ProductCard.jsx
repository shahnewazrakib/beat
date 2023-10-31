import { useState } from "react";
import RosegoldHeadphone from "../../assets/rosegold-headphone.jpg";
import YellowHeadphone from "../../assets/yellow-headphone.png";
import RedHeadphone from "../../assets/red-headphone.jpg";
import BlackHeadphone from "../../assets/black-headphone.jpg";

function ProductCard({ title, price }) {
  const [activeHeadphone, setActiveHeadpone] = useState(0);

  const headphones = [
    RosegoldHeadphone,
    YellowHeadphone,
    RedHeadphone,
    BlackHeadphone,
  ];

  return (
    <div className="bg-white rounded-lg shadow-default py-6 px-8">
      <img src={headphones[activeHeadphone]} alt={title} />
      <p className="text-2xl font-medium">${price}</p>
      <p className="text-lg ">{title}</p>
      <div className="flex items-center gap-2 mt-3">
        <div
          onClick={() => setActiveHeadpone(0)}
          className={`${styles.color} bg-gold`}
        ></div>
        <div
          onClick={() => setActiveHeadpone(1)}
          className={`${styles.color} bg-yellow`}
        ></div>
        <div
          onClick={() => setActiveHeadpone(2)}
          className={`${styles.color} bg-red`}
        ></div>
        <div
          onClick={() => setActiveHeadpone(3)}
          className={`${styles.color} bg-black`}
        ></div>
      </div>
      <button className="w-full p-2 rounded-full bg-white border border-black text-black mt-8 transition duration-200 hover:bg-black hover:text-white">
        Add To Cart
      </button>
    </div>
  );
}

const styles = {
  color: "w-5 h-5 rounded-full cursor-pointer",
};

export default ProductCard;
