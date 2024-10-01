import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import loginIcons from "../assest/signin.gif";
import { FaRegEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    
  });

  const handeleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("data signup", data);

  return (
    <section id="sigup">
      <div className="mx-auto container p-10 ">
        <div className="bg-white p-4 w-full max-w-sm mx-auto rounded-md shadow-lg">
          <div className="w-16 h-16 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form class="mt-6" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name :</label>
              <div className="bg-slate-100 p-1.5">
                <input
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  value={data.name}
                  onChange={handeleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email :</label>
              <div className="bg-slate-100 p-1.5">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  onChange={handeleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="grid">
              <label>Password :</label>
              <div className="bg-slate-100 p-1.5 flex ">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  name="password"
                  value={data.password}
                  onChange={handeleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />

                <div
                  className="cursor-pointer "
                  onClick={() => setShowPassword((e) => !e)}
                >
                  <span>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                </div>
              </div>

              <div className="grid">
                <label>Confirm Password :</label>
                <div className="bg-slate-100 p-1.5 flex ">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="enter password"
                    name="password"
                    value={data.password}
                    onChange={handeleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />

                  <div
                    className="cursor-pointer "
                    onClick={() => setShowConfirmPassword((e) => !e)}
                  >
                    <span>
                      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-900 text-white px-4 py-1 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4">
              Sign Up
            </button>
          </form>
          <p className="py-5">
            Don't have account ?{" "}
            <Link
              class=" text-red-600 hover:underline hover:text-red-700"
              to={"/sign-up"}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
