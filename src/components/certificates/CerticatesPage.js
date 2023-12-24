import "../../css/certificatesStile/CertificatesPage.css";

function CertificatesPage() {
  return (
    <section className="certificates__block">
      <div className="container">
        <div className="main__check__block">
          <div className="check__bg"></div>
          <div className="check__article">
            <h2>Проверка подлинности</h2>
            <div className="line"></div>
            <h4>Тема:</h4>
            <h3>
              Современные стандарты в профессиональном образовании. <br></br>
              Опыт США г.Нью-Йорк
            </h3>
            <h4>Кому выдан:</h4>
            <h3>Abdeldinov Samat</h3>
            <h4>Дата:</h4>
            <h3>21-27 октября 2023 г.</h3>
            <h4>Номер сертификата:</h4>
            <h3>IS0001</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificatesPage;
