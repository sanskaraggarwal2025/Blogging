import React from "react";
import AuthRight from "../Components/AuthRight";
import AuthLeft from "../Components/AuthLeft";
const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
          <AuthLeft type="signup" />
      <div className="hidden lg:block">
        <AuthRight />
      </div>
    </div>
  );
};

export default Signup;
