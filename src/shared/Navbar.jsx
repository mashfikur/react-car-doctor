import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import navLogo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/demo">About</NavLink>
      <NavLink to="/demo">Services</NavLink>
      <NavLink to="/demo">Blog</NavLink>
      <NavLink to="/demo">Contact</NavLink>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 py-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <div>
            <img src={navLogo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-4 text-[1rem] font-semibold ">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <div className="text-xl flex items-center gap-5">
              <HiOutlineShoppingBag></HiOutlineShoppingBag>
              <BiSearch></BiSearch>
              <div>
                <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:text-white  hover:border-[#FF3811] border-[#FF3811] ">
                  Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
