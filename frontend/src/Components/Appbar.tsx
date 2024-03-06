import React from "react";
import { AvatarComp } from "./BlogCard";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <>
      <div className="border-b flex justify-between px-10 py-4">
        <div className="flex flex-col justify-center">Medium</div>
        <div><AvatarComp size={"big"} name="Sanskar"/></div>
      </div>
    </>
  );
};

export default Appbar;
