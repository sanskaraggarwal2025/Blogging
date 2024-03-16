import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignupInput } from "@sanskar2025/common";
import axios from "axios";
import { BACKEND_URL } from "../Config";
const AuthLeft = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit:any = async (data:SignupInput) => {
    try {
      let res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup':'signin'}`,{
        name:data.name,
        email:data.email,
        password:data.password,
      });
      let token = res.data.jwt;
      console.log(token);
      localStorage.setItem("token",token);
      navigate('/blogs');
    } catch (err) {
      console.log(err);
      alert("error while signing up");
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center bg-button-color">
        <div className="flex justify-center bg-button-color">
          <div className="max-w-lg bg-button-color">
            <div className="text-black-color bg-button-color text-4xl px-4">
              {type === "signin" ? "Log In account" : "Create an account"}
            </div>
            <div className="text-center text-black-color bg-button-color">
              {type === "signin"
                ? "Create an account"
                : "Already have an account"}
              <span className="underline decoration-solid bg-button-color text-black-color"> 
                <Link to={type === "signin" ? "/signup" : "/signin"} className="bg-button-color text-black-color">
                  {type === "signin" ? "Signup" : "Login"}
                </Link>
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-button-color">
              {type === "signup" ? (
                <div className="mt-5 bg-button-color">
                  <label className="font-medium text-black-color bg-button-color">Name</label>
                  <br />
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Enter your Name"
                    className="border  text-black-color bg-button-color border-slate-500 p-3 mt-3 rounded-md placeholder:text-slate-600 w-full"
                  />
                </div>
              ) : null}
              <div className="mt-5 bg-button-color">
                <label className="font-medium text-black-color bg-button-color">Email</label>
                <br />
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Enter your Email"
                  className="border border-slate-500 p-3 mt-3 rounded-md placeholder:text-slate-600 w-full  text-black-color bg-button-color"
                />
              </div>
              <div className="mt-5 bg-button-color">
                <label className="font-medium text-black-color bg-button-color">Password</label>
                <br />
                <input
                  {...register("password")}
                  type="text"
                  placeholder="Enter your Password"
                  className="border  text-black-color bg-button-color border-slate-500 p-3 mt-3 rounded-md placeholder:text-slate-600 w-full"
                />
              </div>
              <button
                className="mt-8 bg-black text-white w-full h-12 text-xl"
                type="submit"
              >
                {/* Sign Up */}
                {type === "signin" ? "Log In" : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLeft;
