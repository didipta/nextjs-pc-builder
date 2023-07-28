import React from "react";
import { signIn } from "next-auth/react";
const index = () => {
  return (
    <div>
      <div className="h-96 flex justify-center items-center">
        <div
          className="flex items-center gap-3 shadow-lg rounded-lg p-5 font-bold cursor-pointer hover:bg-gray-100"
          onClick={() => {
            signIn("google", {
              callbackUrl: "http://localhost:3000/",
            });
          }}
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt=""
            className="w-10 h-10"
          />
          Login With Google
        </div>
      </div>
    </div>
  );
};

export default index;
