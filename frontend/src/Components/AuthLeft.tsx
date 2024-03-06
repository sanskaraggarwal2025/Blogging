import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignupInput } from "@sanskar2025/common";
import axios from "axios";
import { BACKEND_URL } from "../Config";
const AuthLeft = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data:SignupInput) => {
    console.log(data);
    
    try {
      let res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup':'signin'}`,{
        name:data.name,
        username:data.username,
        passoword:data.passoword,
      });
      let token = res.data;
      localStorage.setItem("token",token);
      navigate('/blogs');
    } catch (err) {
      console.log(err);
      alert("error while signing up");
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center ">
        <div className="flex justify-center ">
          <div className="max-w-lg">
            <div className="font-black text-4xl px-4">
              {type === "signin" ? "Create an account" : "Create an account"}
            </div>
            <div className="text-center text-zinc-500">
              {type === "signin"
                ? "Create an account"
                : "Already have an account"}
              <span className="underline decoration-solid">
                <Link to={type === "signin" ? "/signup" : "/signin"}>
                  {type === "signin" ? "Signup" : "Login"}
                </Link>
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {type === "signup" ? (
                <div className="mt-5">
                  <label className="font-medium">Name</label>
                  <br />
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Enter your Name"
                    className="border border-slate-500 p-3 mt-3 rounded-md placeholder:text-slate-600 w-full"
                  />
                </div>
              ) : null}
              <div className="mt-5">
                <label className="font-medium">Username</label>
                <br />
                <input
                  {...register("username")}
                  type="text"
                  placeholder="Enter your Username"
                  className="border border-slate-500 p-3 mt-3 rounded-md placeholder:text-slate-600 w-full"
                />
              </div>
              <div className="mt-5">
                <label className="font-medium">Password</label>
                <br />
                <input
                  {...register("passoword")}
                  type="text"
                  placeholder="Enter your Password"
                  className="border border-slate-500 p-3 mt-3 rounded-md placeholder:text-slate-600 w-full"
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
