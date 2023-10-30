import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import navLogo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const { user, userSignOut, loading } = useContext(AuthContext);

  const navLink = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/demo">About</NavLink>
      <NavLink to="/demo">Services</NavLink>
      <NavLink to="/demo">Blog</NavLink>
      <NavLink to="/demo">Contact</NavLink>
    </>
  );

  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Logged Out successfully");

        // clearing the cookie
        axios.get("http://localhost:5000/remove-token", {
          withCredentials: true,
        });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

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
            <Link to={"/"}>
              <img src={navLogo} alt="" />
            </Link>
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
              {user && (
                <>
                  <Link to="/bookings">
                    <HiOutlineShoppingBag></HiOutlineShoppingBag>
                  </Link>
                  <BiSearch></BiSearch>
                </>
              )}
              <div className="flex gap-4">
                {loading ? (
                  <span className="loading loading-spinner loading-lg"></span>
                ) : user ? (
                  <div className="flex gap-4">
                    <button className="btn btn-outline text-main hover:bg-main hover:text-white hover:border-main ">
                      Appointment
                    </button>

                    <button
                      onClick={handleLogOut}
                      className="btn  bg-main text-white  hover:bg-main  hover:border-main "
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <Link to="/sign-up">
                      <button className="btn  bg-main text-white  hover:bg-main  hover:border-main ">
                        Sign up
                      </button>
                    </Link>
                    <Link to="/login">
                      <button className="btn  bg-main text-white  hover:bg-main  hover:border-main ">
                        Login
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
