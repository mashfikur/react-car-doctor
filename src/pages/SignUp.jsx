import { Link, useNavigate } from "react-router-dom";
import loginBanner from "../assets/images/login/login.svg";
import icon1 from "../assets/icons/auth-icon-1.png";
import icon2 from "../assets/icons/auth-icon-2.png";
import icon3 from "../assets/icons/auth-icon-3.png";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password, name);

    // creating user
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // updating user
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            toast.success("Account Created Successfully");
            form.reset();
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.code);
          });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div>
      <div>
        <div className="min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 flex flex-col items-center justify-center ">
              <img src={loginBanner} className="mx-auto" alt="login-banner" />
            </div>
            <div className="lg:col-span-3 border rounded-xl shadow-lg py-10 lg:px-60 ">
              <div>
                <h3 className="text-center font-semibold text-4xl">Sign Up</h3>
              </div>
              <div className=" w-full  bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered focus:outline-none"
                      required
                      name="name"
                      autoComplete="true"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered focus:outline-none"
                      required
                      name="email"
                      autoComplete="true"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered focus:outline-none"
                      required
                      name="password"
                      autoComplete="true"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn capitalize font-normal bg-main hover:bg-main text-white">
                      Sign Up
                    </button>
                  </div>
                </form>

                <div>
                  <h3 className="font-medium mb-7 text-center text-[1.12rem]">
                    Or Sign In with
                  </h3>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      className="bg-[#F5F5F8] rounded-full p-1 "
                      src={icon1}
                      alt=""
                    />
                    <img
                      className="bg-[#F5F5F8] rounded-full p-2 "
                      src={icon3}
                      alt=""
                    />
                    <img
                      className="bg-[#F5F5F8] rounded-full p-2 "
                      src={icon2}
                      alt=""
                    />
                  </div>
                  <h3 className="font-medium mt-10 text-[#737373] text-center text-[1.12rem]">
                    Already Have an account?{" "}
                    <Link to="/login" className="text-main font-semibold">
                      Sign In
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
