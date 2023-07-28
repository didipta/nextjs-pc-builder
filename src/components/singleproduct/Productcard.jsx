import Link from "next/link";

const Productcard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className=" h-60 object-cover">
        <img src={product.image} alt="Shoes" />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-sm">
          {product.category}!
          <div className="badge badge-secondary">{product.status}</div>
        </h2>
        <p className="line-clamp-1 my-2 font-semibold">{product?.name}</p>
        <p className="my-1 text-lg font-semibold">
          {product?.price}
          <span className="badge badge-neutral mx-2">
            {product.individual_rating}
          </span>
        </p>
        <div className="card-actions justify-end">
          <Link
            href={`/product/${product.category}-${product.id}`}
            className="px-3 py-1 rounded-lg bg-[#2c2d4f] text-white"
          >
            Product details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
