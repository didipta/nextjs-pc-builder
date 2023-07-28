import React from "react";
import Slider from "react-slick";
const Bannner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className=" pb-10 lg:px-3 marker:overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/modern-style-square-colorful-web-banner-design-premium-vector_656447-13.jpg"
            alt=""
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div>
          <img
            src="https://www.gadstyle.com/wp-content/uploads/2023/06/gadstyle-home-banner1-950x475.webp"
            alt=""
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/realistic-cyber-monday-twitter-header_23-2149816807.jpg"
            alt=""
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_106176-1544.jpg"
            alt=""
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/flat-black-friday-twitter-cover-template_23-2149103019.jpg"
            alt=""
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Bannner;
