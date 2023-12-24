import React from "react";
import "../css/Partners.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import frame from "../img/counsilFrame.svg";
import frameSecond from "../img/euroFrame.svg";
import frameThird from "../img/chambreFrame.svg";
import frameForth from "../img/academieFrame.svg";
import frameFifth from "../img/collegeFrame.svg";

function Partners() {
  const settingsPartners = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    lazyLoad: "Ondemand",
    infinity: true,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: false,
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  };

  return (
    <section className="partners">
      <div className="container">
        <h2>Наши партнеры</h2>
        <div className="line"></div>
        <div className="partners__block">
          <Slider {...settingsPartners}>
            <img src={frame} alt="Counsil"></img>
            <img src={frameSecond} alt="Euro"></img>
            <img src={frameThird} alt="Chambre"></img>
            <img src={frameForth} alt="Academia"></img>
            <img src={frameFifth} alt="College"></img>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Partners;
