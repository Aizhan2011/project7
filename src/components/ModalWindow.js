import React, { useState } from "react";
import "../css/Modal.css";
import Modal from "react-modal"
import InputMask from "react-input-mask";

function ModalWindow({openModal}) {
const [value, setValue] = useState("");
  function InputChange(event) {
    setValue(event.target.value);
  }
  return (
    // <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="form" contentLabel="exampleModal">
    //   <form className="form">
    //     <button className="btnClose">
    //       X
    //     </button>
    //     <h2 className="modal__title">Записаться на стажировку</h2>
    //     <div className="line"></div>
    //     <h4>
    //       Современные стандарты в профессиональном образовании. Опыт Австрии,
    //       Чехии, Германии. с 27 ноября по 4 декабря 2023 года.
    //     </h4>
    //     <input type="text" placeholder="ФИО по паспорту"></input>
    //     <input type="text" placeholder="№ паспорта"></input>
    //     <InputMask
    //       type="tel"
    //       value={value}
    //       mask="+7 (999) 999 99 99"
    //       placeholder="+7 (...)"
    //       onChange={InputChange}
    //     ></InputMask>
    //     <input type="email" placeholder="Эл.почта"></input>
    //     <input type="text" placeholder="Организация"></input>
    //     <input type="text" placeholder="Должность"></input>
    //     <button className="btn__send">
    //       Отправить
    //     </button>
    //   </form>
    // </Modal>
<h2></h2>
  );
}

export default ModalWindow;
