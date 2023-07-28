import React from "react";

import Bannner from "./Bannner";
import Productcard from "../singleproduct/Productcard";
import Link from "next/link";

const Homepage = ({ categories, products }) => {
  console.log(products);
  return (
    <>
      <Bannner />

      <div className="lg:w-5/12 mx-auto w-full p-2 my-5">
        <h1 className="text-2xl font-bold text-center my-3">
          Featured Categories
        </h1>
        <div className="grid grid-cols-3 gap-4 justify-center items-center">
          {categories.map((category) => (
            <div key={category.id}>
              {category.name !== "Others" && (
                <Link
                  href={`/category/${category.id}`}
                  className="card shadow-lg bg-base-100 "
                >
                  <figure>
                    <img src={category.image} alt="Shoes" className="h-10" />
                  </figure>
                  <div className="card-body mx-auto h-20">
                    <h2 className="card-title text-sm">{category.name}</h2>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-20 py-5">
        <h1 className="text-2xl font-bold text-center my-3">Featured Items</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
          {products.map((product) => (
            <>
              {product?.products?.map((item) => (
                <Productcard key={item.id} product={item} />
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
