import React from "react";
import Pcbuilder from "../../components/PCBuilder/Pcbuilder";

const index = ({ category }) => {
  return (
    <>
      <Pcbuilder category={category} />
    </>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await fetch(`https://server-side-beta.vercel.app/category`);
  const data = await res.json();
  return {
    props: {
      category: data.data,
    },
  };
}
