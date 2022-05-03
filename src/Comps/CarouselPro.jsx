import React from "react";
import Slider from "react-slick";
import CardCarousel from "./CardCarousel";
import ChangeMediaCard from './ChangeMediaCard';


const Carousel = (props) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid  pt-30 pb-30">
        <div className="container-xxl ptt">
          <div className="row">
            <div className="col-12 d-none d-md-block">
            <h1> {props.title ? props.title : ""}</h1>
            <Slider {...settings}>
              {props.bool
                ? props.product
                    .filter(
                      (item) =>
                        item.category == (props.title ? props.title : "Пицца")
                    )
                    .map((item) => (
                      <CardCarousel {...item} addArr={props.addArr} />
                    ))
                : props.product.map((item) => (
                    <CardCarousel {...item} addArr={props.addArr} />
                  ))}
            </Slider>

            </div>

            <div className="col-12 d-md-none">
            <h1> {props.title ? props.title : ""}</h1>
            <Slider {...settings}>
              {props.bool
                ? props.product
                    .filter(
                      (item) =>
                        item.category == (props.title ? props.title : "Пицца")
                    )
                    .map((item) => (
                      <ChangeMediaCard anim={props.anim} {...item}  />
                    ))
                : props.product.map((item) => (
                    <ChangeMediaCard anim={props.anim} {...item}  />
                  ))}
            </Slider>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
