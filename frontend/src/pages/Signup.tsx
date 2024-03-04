import React from "react";
import SignupLeft from "../Components/SignupLeft";
const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      {/* this should be in another component */}
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="max-w-lg">
            <div className="font-black text-4xl">Create an account</div>
            <div className="text-center text-zinc-500">
              Already have an account?
              <span className="underline decoration-solid">Login</span>
            </div>
            <div className="mt-5">
              <label className="font-medium">Username</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Username"
                className="border border-slate-500 p-3 mt-3 rounded-md placeholder:text-slate-600 w-full"
              />
            </div>
            <div className="mt-5">
              <label className="font-medium">Email</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Email"
                className="border border-slate-500 p-3 mt-3 rounded-md placeholder:text-slate-600 w-full"
              />
            </div>
            <div className="mt-5">
              <label className="font-medium">Password</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Password"
                className="border border-slate-500 p-3 mt-3 rounded-md placeholder:text-slate-600 w-full"
              />
            </div>
            <button className="mt-8 bg-black text-white w-full h-12 text-xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="invisible lg:visible">
        <SignupLeft />
      </div>
    </div>
  );
};

export default Signup;
