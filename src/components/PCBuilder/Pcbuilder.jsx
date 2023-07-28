import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  remove,
  removeall,
  removeotheritem,
} from "../../redux/features/Pcbuild/pcbuildslice";
import { toast } from "react-hot-toast";

const Pcbuilder = ({ category }) => {
  const {
    item: items,
    totalprice,
    itemaddcout,
    otheritem,
  } = useSelector((state) => state.pcbuild);
  const dispatch = useDispatch();
  console.log(items["CPU"]);
  return (
    <div className="lg:w-10/12 mx-auto border-2 my-3 rounded-lg lg:p-5">
      <div className=" flex justify-between items-center p-2">
        <div>
          <h1 className="text-2xl font-bold text-stone-500">PC Builder</h1>
        </div>
        <div>
          <button
            className="btn bg-pink-600 text-white border-0"
            disabled={itemaddcout === 6 ? false : true}
            onClick={() => {
              if (itemaddcout === 6) {
                toast.success("Build Complete");
                dispatch(removeall());
              } else {
                toast.error("Please add 6 items");
              }
            }}
          >
            {" "}
            Complete Build
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mx-3 my-5">
        <p className=" text-base text-sky-600 font-bold ">
          PC Builder - Build Your Own Computer
        </p>
        <p className=" text-base text-white rounded-lg font-bold bg-orange-900 px-5 py-3 ">
          total price: ${totalprice.toFixed(2)}
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
                      <div className="flex justify-between items-start gap-3 my-2">
                        {items[item.name]?.image !== undefined && (
                          <img
                            src={items[item.name]?.image}
                            alt=""
                            className="w-10 h-10"
                          />
                        )}
                        <div>
                          <h1 className="font-semibold text-sm">
                            {items[item.name]?.name}
                          </h1>
                          <div className="text-sm text-gray-500">
                            {items[item.name]?.key_features
                              ?.split(",")
                              .map((feature) => (
                                <div className="flex items-center my-2">
                                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                                  <div>{feature}</div>
                                </div>
                              ))}
                          </div>
                          <p className="font-extrabold">
                            {items[item.name]?.price} {"  "}
                            <span className=" text-xs text-gray-400">
                              {items[item.name]?.status}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {items[item.name] !== undefined ? (
                    <div>
                      <button
                        className="btn bg-red-600 text-white border-0"
                        onClick={() => dispatch(remove(items[item.name]))}
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Link
                        href={`/itemsadd/${item.id}`}
                        className="btn bg-sky-600 text-white border-0"
                      >
                        Select
                      </Link>
                    </div>
                  )}
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
                        <div>
                          <p className="font-bold text-blue-500">{item.name}</p>
                          <div className="flex justify-between items-start gap-3 my-2">
                            {otheritem[item.name]?.image !== undefined && (
                              <img
                                src={otheritem[item.name]?.image}
                                alt=""
                                className="w-10 h-10"
                              />
                            )}
                            <div>
                              <h1 className="font-semibold text-sm">
                                {otheritem[item.name]?.name}
                              </h1>
                              <div className="text-sm text-gray-500">
                                {otheritem[item.name]?.key_features
                                  ?.split(",")
                                  .map((feature) => (
                                    <div className="flex items-center my-2">
                                      <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                                      <div>{feature}</div>
                                    </div>
                                  ))}
                              </div>
                              <p className="font-extrabold">
                                {otheritem[item.name]?.price} {"  "}
                                <span className=" text-xs text-gray-400">
                                  {otheritem[item.name]?.status}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {otheritem[item.name] !== undefined ? (
                        <div>
                          <button
                            className="btn bg-red-600 text-white border-0"
                            onClick={() =>
                              dispatch(removeotheritem(otheritem[item.name]))
                            }
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div>
                          <Link
                            href={`/otheritem/${item.id}`}
                            className="btn bg-sky-600 text-white border-0"
                          >
                            Select
                          </Link>
                        </div>
                      )}
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
