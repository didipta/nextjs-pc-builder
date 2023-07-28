import React from "react";

const Productdetails = ({ product }) => {
  console.log(product);
  return <div>fgdgd</div>;
};

export default Productdetails;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const category = await res.json();

  const paths = category.data.products.map((product) => ({
    params: {
      id: product.category,
      pid: product.id.toString(),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/product?Id=${params.id}&pid=${params.pid}`
  );

  console.log(
    `http://localhost:3000/api/product?Id=${params.id}&pid=${params.pid}`
  );
  const data = await res.json();
  return {
    props: {
      product: data.data,
    },
  };
}
