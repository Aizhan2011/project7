import React,{useState} from "react"
import Header from "./Header"
import { Link } from "react-router-dom";
import "../css/BurgerMenu.css"


function BurgerMenu(){
    const [appointment, setapp] = useState(false);
    const [appoint, setText] = useState(false);

    const callModal = () => {
      setapp(!appointment);

    };

    
    const callText = () => {
        setText(!appoint)
      };
  
    const closeModal = () => {
      setapp(false);
    };

    const closeBurger = () => {
        setText(false);
      };
    function closeModals(el) {
        el.preventDefault();
        closeModal();
      }



      function closeBurgers(el){
        el.preventDefault()
        closeBurger()
      }



    return(
        <div className={`container__media__menu ${appointment ? "activeMobile" : ""}`} onClick={callModal}>
       <div onClick={closeModal}className={`menu-text closeBurger ${appoint ? "activeText" : ""}`} onClick={callText}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="25" width="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </div>
        <ul className={`menu__burger ${appoint ? "activeText" : ""}`}>
          <span className="menu-global menu-top"></span>
          <span className="menu-global menu-middle"></span>
          <span className="menu-global menu-bottom"></span> 
          <li className={`menu-text ${appoint ? "activeText" : ""}`} onClick={callText}><Link to="/">Главная</Link></li>
          <li className={`menu-text ${appoint ? "activeText" : ""}`} onClick={callText}><Link to="/about">О нас</Link>
</li>
          <li className={`menu-text ${appoint ? "activeText" : ""}`} onClick={callText}><Link to="/projects">Проекты</Link>
</li>
          <li className={`menu-text ${appoint ? "activeText" : ""}`} onClick={callText}><Link to="/certificate">Сертификаты</Link>
</li>
          <li className={`menu-text ${appoint ? "activeText" : ""}`} onClick={callText}><Link to="/contacts">Контакты</Link>
</li>
        </ul>
        </div>
    )
}



export default BurgerMenu
// className={`modalWindow ${appointment ? "active" : ""}`}