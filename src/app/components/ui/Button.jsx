import React from "react";

const Button = (props) => {
  return (
    <button className="uppercase cursor-pointer w-fit flex items-center gap-6  bg-yellow-200 px-6 py-3 rounded-2Lg">
      <p className=" text-black font-bold">{props.children}</p>
      {props.icon && (
        <div className="bg-black rounded-full h-12 w-12 flex items-center justify-center">
          {props.icon}
        </div>
      )}
    </button>
  );
};

export default Button;
