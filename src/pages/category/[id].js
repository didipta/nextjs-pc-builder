import React from "react";
import Category from "../../components/Category/Category";

const singlecategory = ({ categories }) => {
  return (
    <div>
      <Category categories={categories} />
    </div>
  );
};

export default singlecategory;

export async function getStaticPaths() {
  const res = await fetch("https://server-side-beta.vercel.app/product");
  const category = await res.json();

  const paths = category.data.map((category) => ({
    params: { id: category.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://server-side-beta.vercel.app/category/${params.id}`
  );

  const data = await res.json();

  return {
    props: {
      categories: data.data,
    },
  };
}
