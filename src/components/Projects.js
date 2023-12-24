import React from "react";
import "../css/Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Projects() {
  const settingsProject = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: true,
    slidesToShow: 3,
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
    <section className="projects">
      <div className="container">
        <h2>Наши проекты</h2>
        <div className="line"></div>
        <div className="main__project">
          <Slider {...settingsProject}>
            <div className="project__child">
              <div className="first__child child__bg"></div>
              <h4>Стажировка по программе Австрия, Чехия, Германия </h4>
              <h5>с 27 ноября по 4 декабря 2023 года</h5>
            </div>
            <div className="project__child">
              <div className="second__child child__bg"></div>
              <h4>
                Программа международной стажировки по медицинскому бизнесу в
                Южной Корее в городе Сеул, Южная Корея.
              </h4>
              <h5>с 03 по 09 марта 2024 года </h5>
            </div>
            <div className="project__child">
              <div className="third__child child__bg"></div>
              <h4>
                Программа стажировки «Менеджмент в высшем образовании на примере
                ОАЭ» в г. Дубай.
              </h4>
              <h5>с 14 по 19 января 2024 года</h5>
            </div>
            <div className="project__child">
              <div className="forth__child child__bg"></div>
              <h4>
                Международная стажировка «Современные стандарты в
                арт-менеджменте: Опыт Турции, г. Стамбул»
              </h4>
              <h5>Дата проведения: с 17 по 24 декабря 2023 года</h5>
            </div>
            <div className="project__child">
              <div className="fifth__child child__bg"></div>
              <h4>
                Международная стажировка «Современные стандарты в
                арт-менеджменте: Опыт ОАЭ, г. Дубай»
              </h4>
              <h5>Дата проведения: с 24 по 30 марта 2024 года</h5>
            </div>
          </Slider>

          <div className="hr"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
