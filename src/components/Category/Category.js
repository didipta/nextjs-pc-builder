import Productcard from "../singleproduct/Productcard";

const Category = ({ categories }) => {
  return (
    <div>
      <h1 className="text-3xl my-3 mx-5 font-extrabold">{categories.name}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-20 justify-center items-center">
        {categories?.products?.map((item) => (
          <Productcard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
