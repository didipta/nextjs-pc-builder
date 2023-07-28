import React from "react";
import Category from "../../components/Category/Category";

const singlecategory = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <Category categories={categories} />
    </div>
  );
};

export default singlecategory;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const category = await res.json();

  const paths = category.data.map((category) => ({
    params: { id: category.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/category?Id=${params.id}`);

  const data = await res.json();
  return {
    props: {
      categories: data.data,
    },
  };
}
