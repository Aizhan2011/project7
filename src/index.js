import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OurProjectPage from "./components/ourProjectPage/OurProjectPage";
// import ContactPage from "./components/contactPage/ContactPage";
import AboutUsPage from "./components/aboutUsPage/AboutUsPage";
import Modal from "./components/ModalWindow";
import CertificatesPage from "./components/certificates/CerticatesPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Modal />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/projects" element={<OurProjectPage />} />
        <Route path="/certificate" element={<CertificatesPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
