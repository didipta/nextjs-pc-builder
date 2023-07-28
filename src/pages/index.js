import Homepage from "../components/Homepage/Homepage";

export default function Home({ categories, products }) {
  return (
    <>
      <Homepage categories={categories} products={products} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/category`);
  const data = await res.json();

  const res2 = await fetch(`http://localhost:3000/api/product`);
  const data2 = await res2.json();
  return {
    props: {
      categories: data.data,
      products: data2.data,
    },
  };
}
