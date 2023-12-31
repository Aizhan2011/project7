import React from "react";
import "../css/AboutUs.css";

function AboutUs() {
  return (
    <section className="secondSection">
      <div className="container">
        <div className="secondBg"></div>
        <article>
          <h2>Об организации</h2>
          <div className="line"></div>
          <h3>
            Цель Центра международного образования и инноваций CIEI – проведение
            международных программ стажировок, знакомство с деятельностью
            ведущих учреждений системы образования, здравоохранения, юридической
            сферы, сферы искусства и других направлений, обмен опытом по
            совершенствованию профессионального мастерства, знакомство с
            новейшими технологиями обучения и перспективами их развития.
            <br></br>
            Мы проводим зарубежные стажировки для всех сфер деятельности по
            странам США, Европа, Южная Корея, Япония, Сингапур и др.
            <h4>Основные задачи стажировок за рубежом:</h4>·Накопление
            необходимого опыта у иностранных компаний ;<br></br>· Расширение
            поля мышления; <br></br>· Использование полученного опыта в своей
            компании, который вносит вклад в развитие Казахстана.
          </h3>
          <div className="for__button">
          <button>Узнать больше</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutUs;
