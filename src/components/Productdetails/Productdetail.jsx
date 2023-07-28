const Productdetail = ({ product }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:w-10/12 my-10 mx-auto">
      <figure>
        <img src={product?.image} alt="Album" className=" h-[600px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name} </h2>
        <p>{product?.description}</p>
      </div>
    </div>
  );
};

export default Productdetail;
