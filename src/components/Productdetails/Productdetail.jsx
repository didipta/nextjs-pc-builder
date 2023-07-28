const Productdetail = ({ product }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:w-10/12 my-10 mx-auto">
      <figure>
        <img src={product?.image} alt="Album" className=" h-[600px] my-5" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name} </h2>
        <div>
          <small className="text-gray-500">category-{product?.category}</small>{" "}
          || <small className="text-gray-500">reviews-{product?.reviews}</small>
        </div>
        <div>
          <small className="text-gray-500">
            individual rating-{product?.individual_rating}
          </small>{" "}
          || <small className="text-gray-500">status-{product?.status}</small>||{" "}
          <small className="text-gray-500">
            average rating-{product?.average_rating}
          </small>
        </div>
        <div className=" text-base font-medium">{product?.description}</div>
        <h1 className="text-2xl font-semibold">{product?.price}</h1>
        <p>
          {product?.key_features?.split(",").map((feature) => (
            <div className="flex items-center my-2">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <div>{feature}</div>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Productdetail;
