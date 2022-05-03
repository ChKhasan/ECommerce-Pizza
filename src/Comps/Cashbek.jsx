import React, { Component } from "react";
import Cashin from "./Cashin";
import Slider from "react-slick";
import ScrollContainer from "react-indiana-drag-scroll";
const Cashbek = () => {
  const cash = [
    {
      name: "Images/Group 737.png",
      price: "3 средние пиццы от 999 рублей",
    },
    {
      name: "Images/Group 738.png",
      price: "Кэшбек 10% на самовывоз (доставка)",
    },
    {
      name: "Images/Group 737.png",
      price: "3 средние пиццы от 999 рублей",
    },
    {
      name: "Images/Group 738.png",
      price: "Кэшбек 10% на самовывоз (доставка)",
    },
  ];
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
      <div className="container-fluid c-color  pb-30">
        <div className="container-xxl ptt">
          <div className="row">
            <div className="col-12  d-flex justify-content-between flex-wrap">
              <ScrollContainer className="scroll-container w-100 d-flex justify-content-between">
                {cash.map((item, index) => (
                  <Cashin name={item.name} price={item.price} />
                ))}
              </ScrollContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cashbek;
