import React from "react";
import { useState } from "react";
import "../../css/ourProjectPageStyle/OurProjectPage.css";
import { Link } from "react-router-dom";
import ModalWindow from "../ModalWindow";
import Modal from "react-modal"
import jsonData from "../../components/data.json";
import InputMask from "react-input-mask";
import { faL } from "@fortawesome/free-solid-svg-icons";



// const modalStyles = {
//   content:{
//     width:"100%",
//     height:"100%",
//     top:"0",
//     left:"0",
//     background:"rgba(0,0,0,0.5)",
//     zIndex:"999999",
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center"
//   }
// }

Modal.setAppElement("#root")

function OurProjectPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeTxt , setActiveTxt] = useState("")
  const [inputValue , setInputValue] = useState("")


  const handleTxt=(event)=>{
    setActiveTxt(event.target.textContent)
    console.log(event.target.textContent)
  }
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveTxt(false)

  };

  const numberValidation = (el) => {
    const newValue = el.target.value.replace(/[^0-9]/g, "");
    setInputValue(newValue);
  };

  const tabs = [
    {
      tabName: "Актуальные",
      tabContent: (
        <div className="project__page">
          <div className="main__content">
            <div className="content__first__active content"></div>
            <div className="txt__content">
              <h2>
                Международная стажировка <br></br>
                Стажировка по программе Австрия, Чехия, Германия
              </h2>
              <h4>Дата проведения: с 27 ноября по 4 декабря 2023 года</h4>
              <div className="btns">
                <a href="#form" className="btn__download">
                  Скачать программу
                </a>
                <a href="#form" className="btn__sign__finished">
                  Запись окончена
                </a>
              </div>
            </div>
          </div>

          <div className="main__content">
            <div className="content__second__active content"></div>
            <div className="txt__content">
              <h2>
                Международная стажировка <br></br>
                «Современные стандарты в арт-менеджменте: Опыт Турции, г.
                Стамбул»
              </h2>
              <h4>Дата проведения: с 17 по 24 декабря 2023 года</h4>
              <div className="btns">
                <a href="#form" className="btn__download">
                  Скачать программу
                </a>
                <a href="#form" className="btn__sign">
                  Записаться на стажировку
                </a>
              </div>
            </div>
          </div>
          <div className="main__content">
            <div className="content__third__active content"></div>
            <div className="txt__content">
              <h2>
                Международная стажировка <br></br>
                «Менеджмент в высшем образовании на примере ОАЭ»
              </h2>
              <h4>Дата проведения: с 14 по 19 января 2024 года</h4>
              <div className="btns">
                <a href="#form" className="btn__download">
                  Скачать программу
                </a>
                <a href="#form" className="btn__sign">
                  Записаться на стажировку
                </a>
              </div>
            </div>
          </div>
          <div className="main__content">
            <div className="content__forth__active content"></div>
            <div className="txt__content">
              <h2>
                Международная стажировка <br></br>
                «Медицинский бизнес в Южной Корее, г. Сеул»
              </h2>
              <h4>Дата проведения: с 03 по 09 марта 2024 года </h4>
              <div className="btns">
                <a href="#form" className="btn__download">
                  Скачать программу
                </a>
                <a className="btn__sign">
                  Записаться на стажировку
                </a>
              </div>
            </div>
          </div>
          <div className="main__content">
            <div className="content__fifth__active content"></div>
            <div className="txt__content">
              <h2 onClick={handleTxt}>
                
                Международная стажировка <br></br>
                «Современные стандарты в арт-менеджменте: Опыт ОАЭ, г. Дубай»
              </h2>
              <h4>Дата проведения: с 24 по 30 марта 2024 года</h4>
              <div className="btns">
                <a className="btn__download">
                  Скачать программу
                </a>
                <a className="btn__sign" onClick={openModal}>
                  Записаться на стажировку
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      tabName: "Будущие",
      tabContent: <div></div>,
    },
    {
      tabName: "Завершенные",
      tabContent__finished: (
        <div className="page__finished">
          <div className="content__finished">
            <div className="finished__first finish"></div>
            <h2>
              «Формирование профессионального мастерства на основе стандартов
              WorldSkills. Прогрессивные технологии профессионального
              образования. Опыт Южной Кореи»
            </h2>
            <h4>с 12 по 18 октября 2022 года</h4>
          </div>

          <div className="content__finished">
            <div className="finished__second finish"></div>
            <h2>
              «Современные стандарты профессионального медицинского образования.
              Опыт ОАЭ, г. Дубай»
            </h2>
            <h4>с 05 по 11 февраля 2023 года</h4>
          </div>

          <div className="content__finished">
            <div className="finished__third finish"></div>
            <h2>
              «Современные стандарты в профессиональном образовании. Опыт
              Франции, г. Париж»
            </h2>
            <h4>с 07 по 13 марта 2023 года</h4>
          </div>

          <div className="content__finished">
            <div className="finished__forth finish"></div>
            <h2>«Практики менеджмента в образовании: опыт Грузии»</h2>
            <h4>с 11 по 17 июня 2023 года</h4>
          </div>

          <div className="content__finished">
            <div className="finished__fifth finish"></div>
            <h2>
              «Развитие системы профессионального образования на основе
              международных стандартов Worldskills. Опыт Польши»
            </h2>
            <h4>с 06 по 12 сентября 2023 года</h4>
          </div>

          <div className="content__finished">
            <div className="finished__sixth finish"></div>
            <h2>
              «Система организации институтов адвокатуры, нотариата, медиации и
              международных судов Европейского Союза: опыт и современные
              тенденции»
            </h2>
            <h4>с 01 по 10 октября 2023 года</h4>
          </div>

          <div className="content__finished">
            <div className="finished__seventh finish"></div>
            <h2>
              «Современные стандарты в профессиональном образовании. Опыт США,
              г. Нью-Йорк»
            </h2>
            <h4>с 21 по 27 октября 2023 года</h4>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="tabBlog">
     

      <div className="pageBg"></div>
      <div className="container">
        <nav className="our__project__nav">
          <div className="title__line">
            <h2>Наши проекты</h2>
            <div className="line"></div>
          </div>

          <div className="tabs">
            {tabs.map((tab, index) => (
              <div
                onClick={() => setActiveTab(index)}
                key={index}
                className={`tab ${activeTab === index ? "active" : ""}`}
              >
                {tab.tabName}
              </div>
            ))}
          </div>
        </nav>

        <div className="tabsContent">{tabs[activeTab].tabContent}</div>
        <div className="tabsContent__finished">
          {tabs[activeTab].tabContent__finished}
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="form" contentLabel="exampleModal">
      <form className="form" onSubmit={openModal}>
        <span className="btnClose" onClick={closeModal}>
          X
        </span>
        <h2 className="modal__title">Записаться на стажировку</h2>
        <div className="line"></div>
        <h4>{activeTxt}
          {/* Современные стандарты в профессиональном образовании. Опыт Австрии,
          Чехии, Германии. с 27 ноября по 4 декабря 2023 года. */}
        </h4>
        <input name="FID" type="text" placeholder="ФИО по паспорту" required minLength={1}></input>
        <input name="id number" type="text" placeholder="№ паспорта" required value={inputValue} onChange={numberValidation}></input>
        <InputMask  name="phone number" type="tel"
          mask="+7 (999) 999 99 99"
          placeholder="+7 (...)"
          required/>
        <input name="email adress"type="email" placeholder="Эл.почта" required></input>
        <input name="name of organization" type="text" placeholder="Организация"></input>
        <input type="text" placeholder="Должность"></input>
        <button className="btn__send">
          Отправить
        </button>
      </form>
    </Modal>
    </div>
  );
}

export default OurProjectPage;
