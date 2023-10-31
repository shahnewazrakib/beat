import { useState } from "react";
import RedHeadphone from "../../assets/gallery-red-headphone.jpg";
import YellowHeadphone from "../../assets/gallery-yellow-headphone.png";
import RosegoldHeadphone from "../../assets/gallery-rosegold-headphone.jpg";
import BlackHeadphone from "../../assets/gallery-black-headphone.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState(0);
  const headphones = [
    RedHeadphone,
    RosegoldHeadphone,
    YellowHeadphone,
    BlackHeadphone,
  ];

  const openLightbox = (index) => {
    setTarget(index);
    setOpen(true);
  };

  return (
    <section className="container mt-24">
      <h1 className="text-4xl text-center font-semibold">Product Gallery</h1>
      <div className="flex gap-16 mt-16">
        <div className="flex-1">
          <iframe
            src="https://www.youtube.com/embed/V2i1YkfrM54?si=h57yyEyhedzXgN8V"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          {headphones.map((headphone, index) => {
            return (
              <img
                src={headphone}
                alt="Headphone"
                className="w-[90%] border border-gray rounded-lg cursor-pointer"
                onClick={() => openLightbox(index)}
              />
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        index={target}
        close={() => setOpen(false)}
        slides={[
          { src: RedHeadphone },
          { src: RosegoldHeadphone },
          { src: YellowHeadphone },
          { src: BlackHeadphone },
        ]}
      />
    </section>
  );
}

export default Gallery;
