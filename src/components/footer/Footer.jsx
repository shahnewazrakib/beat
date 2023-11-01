import Logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light_gray px-2 sm:px-8 py-8">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-[15px] gap-6 md:gap-0 sm:gap-8">
        <div className={`${styles.grid__item}`}>
          <img src={Logo} alt="Beat" className="w-[100px]" />
          <p className="text-dark_gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            accusantium iure perspiciatis aspernatur aliquid
          </p>
        </div>

        <div className={`${styles.grid__item} sm:pl-14 md:pl-5 lg:pl-20`}>
          <h1 className={styles.heading}>Products</h1>
          <div className={styles.links}>
            <a href="#">View All</a>
            <a href="#">Special Offers</a>
            <a href="#">Product Help</a>
            <a href="#">Collaboration</a>
          </div>
        </div>

        <div className={`${styles.grid__item} md:pl-5 lg:pl-20`}>
          <h1 className={styles.heading}>Company</h1>
          <div className={styles.links}>
            <a href="#">About Us</a>
            <a href="#">Trademark</a>
            <a href="#">Terms of Use</a>
            <a href="#">Career</a>
          </div>
        </div>

        <div className={`${styles.grid__item} sm:pl-14 md:pl-0 lg:pl-10`}>
          <h1 className={styles.heading}>Follow Us</h1>
          <div className="flex items-center gap-3">
            <a href="#" className={styles.icon}>
              <FaFacebookF color="#3478ED" />
            </a>
            <a href="#" className={styles.icon}>
              <FaTwitter color="#40A3EE" />
            </a>
            <a href="#" className={styles.icon}>
              <FaLinkedinIn color="#0072B1" />
            </a>
            <a href="#" className={styles.icon}>
              <FaYoutube color="#EC0024" />
            </a>
          </div>
          <p className="text-dark_gray">Copyright © 2023 Beat</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
    grid__item: "space-y-4",
    heading: "text-xl lg:text-2xl font-semibold",
    links:"flex flex-col gap-3 text-dark_gray",
    icon:"shadow-default w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center text-sm"

}

export default Footer;
