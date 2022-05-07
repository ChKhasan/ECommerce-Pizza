import { useSelector } from "react-redux";
import Slider from "react-slick";
import CardCarousel from "./CardCarousel";
import ChangeMediaCard from "./ChangeMediaCard";

const Carousel = (props) => {
  const store = useSelector((state) => state.dataSlice);
  const { title, addElementToData, bool } = props;
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
            <XLCarouselSlider
              title={title}
              addElementToData={addElementToData}
              bool={bool}
              product={store.data}
              settings={settings}
            />
            <SXCarouselSlider
              title={title}
              addElementToData={addElementToData}
              bool={bool}
              product={store.data}
              settings={settings}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const XLCarouselSlider = (props) => {
  const { title, addElementToData, bool, product, settings } = props;
  return (
    <div className="col-12 d-none d-md-block">
      <h1> {title ? title : ""}</h1>
      <Slider {...settings}>
        {bool
          ? product
              .filter((item) => item.category == (title ? title : "Пицца"))
              .map((item) => (
                <CardCarousel {...item} addElementToData={addElementToData} />
              ))
          : product.map((item) => (
              <CardCarousel {...item} addElementToData={addElementToData} />
            ))}
      </Slider>
    </div>
  );
};

const SXCarouselSlider = (props) => {
  const { title, bool, product, settings } = props;
  return (
    <div className="col-12 d-md-none">
      <h1> {title ? title : ""}</h1>
      <Slider {...settings}>
        {bool
          ? product
              .filter((item) => item.category == (title ? title : "Пицца"))
              .map((item) => <ChangeMediaCard {...item} />)
          : product.map((item) => <ChangeMediaCard {...item} />)}
      </Slider>
    </div>
  );
};
export default Carousel;
