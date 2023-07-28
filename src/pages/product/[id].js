import { useRouter } from "next/router";
import React from "react";
import Productdetail from "../../components/Productdetails/Productdetail";

const Productdetails = ({ product }) => {
  console.log(product);
  return (
    <>
      <Productdetail product={product} />
    </>
  );
};

export default Productdetails;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/product`);
  const category = await res.json();

  let categoryArray = [];

  category.data.map((item) => {
    item.products.map((product) => {
      categoryArray.push({
        name: item.name,
        id: product.id,
      });
    });
  });

  console.log(categoryArray);

  const paths = categoryArray.map((category) => ({
    params: {
      id: `${category.name}-${category.id.toString()}`,
    },
  }));

  console.log(paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/product?Id=${params.id.split("-")[0]}&pid=${
      params.id.split("-")[1]
    }`
  );

  const data = await res.json();
  return {
    props: {
      product: data.data,
    },
  };
}
