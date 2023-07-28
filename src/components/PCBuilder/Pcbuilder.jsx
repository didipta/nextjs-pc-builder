import Link from "next/link";
import React from "react";

const Pcbuilder = ({ category }) => {
  return (
    <div className="lg:w-10/12 mx-auto border-2 my-3 rounded-lg lg:p-5">
      <div className=" flex justify-between items-center p-2">
        <div>
          <h1 className="text-2xl font-bold text-stone-500">PC Builder</h1>
        </div>
        <div>
          <button className="btn bg-pink-600 text-white border-0">
            {" "}
            Add To Builder
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mx-3 my-5">
        <p className=" text-base text-sky-600 font-bold ">
          PC Builder - Build Your Own Computer
        </p>
        <p className=" text-base text-white rounded-lg font-bold bg-orange-900 px-5 py-3 ">
          total price: 0
        </p>
      </div>
      <div>
        <ul>
          {category?.map((item) => (
            <>
              {item.name !== "Others" && (
                <li className="flex justify-between items-center border-b-2 border-gray-300 p-2">
                  <div className="flex justify-between items-start gap-3">
                    <img src={item.image} alt="" className="w-20 h-20" />
                    <div>
                      <p className="font-bold text-blue-500">{item.name}</p>
                      <div>
                        <p className="text-sm text-gray-500">
                          dkjksjfvkjsfvkjnsfkv
                        </p>
                        <p>900</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn bg-red-600 text-white border-0">
                      Select
                    </button>
                  </div>
                </li>
              )}
            </>
          ))}
        </ul>
        <div className="flex justify-between items-center border-b-2 border-gray-300 p-2 text-sm font-bold text-green-700">
          others Items
        </div>

        <ul>
          {category?.map((item) => (
            <>
              {item.name === "Others" && (
                <>
                  {item.items.map((item) => (
                    <li className="flex justify-between items-center border-b-2 border-gray-300 p-2">
                      <div className="flex justify-between items-start gap-3">
                        <img src={item.image} alt="" className="w-20 h-20" />
                        <p className="font-bold text-blue-500">{item.name}</p>
                      </div>
                      <div>
                        <button className="btn bg-red-600 text-white border-0">
                          Select
                        </button>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pcbuilder;
