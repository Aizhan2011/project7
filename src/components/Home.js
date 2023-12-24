import React from "react";
import "../css/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    speed: 500,
    lazyLoad: "Ondemand",
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: false
        }
      },
    ],
  };

  return (
    <section className="home">
      <Slider {...settings}>
        <nav className="slide">
          <div className="slideOneImg">
            <div className="container parametrs">
              <article className="text__block">
                <h1>ИССЛЕДУЙ МИР С НАМИ!</h1>
                <h3>Центр CIEI Ваш путь к глобальному успеху</h3>
                <h4 className="mobile__text">
                  Наш Центр CIEI - это ваш билет в мир бескрайних возможностей и
                  глобального роста. Откройте двери к карьерным перспективам и
                  культурным приключениям, которые изменят вашу жизнь.
                </h4>
              </article>
            </div>
          </div>
        </nav>
        <nav className="slide">
          <div className="thirdSlide">
            <div className="container parametrs">
              <article className="text__block">
                <h2>ПУТЕШЕСТВИЯ И ПРИКЛЮЧЕНИЯ</h2>
                <h3>Исследуйте новые страны и культуры</h3>
                <h4 className="mobile__text">
                  Наши стажировки - это не только работа, но и уникальная
                  возможность исследовать мир. Путешествуйте, познавайте разные
                  культуры и создавайте незабываемые воспоминания на пути к
                  успеху.
                </h4>
              </article>
            </div>
          </div>
        </nav>
        <nav className="slide">
          <div className="forthSlide">
            <div className="container parametrs">
              <article className="text__block">
                <h2>ПРИСОЕДИНЯЙТЕСЬ К НАМ СЕГОДНЯ</h2>
                <h3>Ваши международные стажировки ждут вас</h3>
                <h4 className="mobile__text">
                  Готовы начать свой мировой путь? Присоединяйтесь к нашему
                  Центру CIEI откройте двери к бескрайним возможностям. Начните
                  сегодня и создайте свой путь к успеху!
                </h4>
              </article>
            </div>
          </div>
        </nav>
        <nav className="slide">
          <div className="fifthSlide">
            <div className="container parametrs">
              <article className="text__block">
                <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
                <h3>Почему выбирают нас?</h3>
                <h4 className="mobile__text">
                  Мы предоставляем: - Качественные стажировки в лучших
                  международных организациях; - Поддержку и обучение в течение
                  всей стажировки; - Возможности для культурного обогащения и
                  языкового развития; - Гарантированный рост вашей
                  профессиональной карьеры.
                </h4>
              </article>
            </div>
          </div>
        </nav>
        <nav className="slide">
          <div className="sixthSlide">
            <div className="container parametrs">
              <article className="text__block">
                <h2>СДЕЛАЙТЕ СВОЙ ВЫБОР</h2>
                <h3>Ваша карьера, ваше будущее</h3>
                <h4 className="mobile__text">
                  Решите сегодня начать свой путь к мировым возможностям. Наш
                  центр международных стажировок - ваш ключ к глобальному
                  успеху. Сделайте свой выбор и начните свою увлекательную
                  международную стажировку уже сейчас!
                </h4>
              </article>
            </div>
          </div>
        </nav>
        <nav className="slide">
          <div className="seventhSlide">
            <div className="container parametrs">
              <article className="text__block">
                <h2>РАБОТАЕМ С ЛУЧШИМИ</h2>
                <h3>Наши партнеры - мировые лидеры в индустрии</h3>
                <h4 className="mobile__text">
                  Мы сотрудничаем с ведущими мировыми компаниями, что
                  обеспечивает нашим стажерам доступ к проектам на передовой
                  индустрии. У нас есть партнеры, которые доверяют нам свои
                  будущие лидеры.
                </h4>
              </article>
            </div>
          </div>
        </nav>
      </Slider>
    </section>
  );
}

export default Home;
