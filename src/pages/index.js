import Homepage from "../components/Homepage/Homepage";

export default function Home({ categories, products }) {
  return (
    <>
      <Homepage categories={categories} products={products} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://server-side-beta.vercel.app/category`);
  const data = await res.json();

  const res2 = await fetch(`https://server-side-beta.vercel.app/product`);
  const data2 = await res2.json();
  return {
    props: {
      categories: data.data,
      products: data2.data,
    },
  };
}
