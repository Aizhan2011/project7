import React ,{useState} from "react";
import "../css/Header.css";
import LogoSvg from "../img/svg/Logo";
import phone from "../img/phone.svg";
import emailLogo from "../img/email.svg";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

function Header() {

  const [appointment, setapp] = useState(false);

  const callModal = () => {
    setapp(!appointment);
  };

  const closeModal = () => {
    setapp(false);
  };



  return (
    <header>
      <div className="container container__media__menu">
        <a href="#" className="logoCheck">
          <LogoSvg />
        </a>
        <menu className="nav">
          <li className="nav-item">
            <Link to="/">Главная</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">О нас</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Проекты</Link>
          </li>
          <li className="nav-item">
            <Link to="/certificate">Сертификаты</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts">Контакты</Link>
          </li>
        </menu>
        {/* <li className="mobile__phone">
          <img src={phone}></img>
          <a href="tel:+7 (777) 777‒77‒77">+7 (777) 777‒77‒77</a>
        </li> */}

<BurgerMenu />

      </div>
    </header>

  );
}



export default Header;
