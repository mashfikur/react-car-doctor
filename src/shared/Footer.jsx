import { Link } from "react-router-dom";
import footerLogo from "../assets/icons/car-doctor-logo.png";

import { BsGoogle, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#151515] ">
      <div className="container mx-auto">
        <footer className="footer p-10 text-white">
          <aside className="space-y-5">
            <div className="flex flex-col items-center">
              <img className="" src={footerLogo} alt="" />
              <h3 className="font-bold text-xl">Car Doctor</h3>
            </div>
            <p>
              Edwin Diaz is a software and web technologies engineer <br /> a
              life coach trainer who is also a serial.
            </p>
            <div className="flex items-center gap-3 text-xl text-white">
              <BsGoogle></BsGoogle>
              <BsTwitter></BsTwitter>
              <BsInstagram></BsInstagram>
              <BsLinkedin></BsLinkedin>
            </div>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <Link className="link link-hover">Branding</Link>
            <Link className="link link-hover">Design</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
