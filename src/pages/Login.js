import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import loginIcons from "../assest/signin.gif";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
const [data, setData] = useState({
  email:"",
  password:""
})

const handeleOnChange =(e)=>{
const {name, value}=e.target

setData((preve)=>{
  return{
...preve,
[name]:value
  }
})

}
const handleSubmit =(e)=>{
e.preventDefault()
}



console.log("data login",data)
  return (
    <section id="login">
      <div className="mx-auto container p-10 ">
        <div className="bg-white p-4 w-full max-w-sm mx-auto rounded-md shadow-lg">
          <div className="w-16 h-16 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form class="mt-6" onSubmit={handleSubmit}>
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
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot Passord ?
              </Link>
            </div>

            <button className="bg-red-600 hover:bg-red-900 text-white px-4 py-1 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4">
              Login
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

export default Login;
