import React from "react";
import "../css/Advantage.css";

function Advantage() {
  return (
    <section className="advantage">
      <div className="container">
        <h2>Преимущества CIEI</h2>
        <span className="line"></span>
        <div className="advantage__main__block">
          <div className="block">
            <div className="first__block child"></div>
            <h4>Повышение профессионального уровня специалиста</h4>
          </div>
          <div className="block">
            <div className="second__block child"></div>
            <h4>Приобретение полезных навыков для будущего сотрудничества</h4>
          </div>
          <div className="block">
            <div className="third__block child"></div>
            <h4>Получение сертификата международного образца</h4>
          </div>
          <div className="block">
            <div className="forth__block child"></div>
            <h4>
              Возможность отработки навыка использования разговорного
              английского языка
            </h4>
          </div>
          <div className="block">
            <div className="fifth__block child"></div>
            <h4>Знакомство с культурой другой страны «изнутри»</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
