import React from "react";
import { FooterBase } from "./styles";
import github from "../../assets/img/github.svg";
import linkedin from "../../assets/img/linkedin.svg";
import email from "../../assets/img/email.svg";

function Footer() {
  return (
    <FooterBase>
      <br />
      <div className="divteste">
        <a
          href="https://github.com/cicerorod"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img src={github} alt="GitHub" className="imgContact" />
        </a>
        <a
          href="https://www.linkedin.com/in/c%C3%ADcero-rodrigues-89623784/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img src={linkedin} alt="linkedin" className="imgContact" />
        </a>
        <a
          href="mailto:cicerorod@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <img src={email} alt="E-mail" className="imgContact" />
        </a>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;Cícero Rodrigues
      <span>
        Criado durante a &nbsp;&nbsp;
        <a href="https://www.alura.com.br/"> Imersão React da </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.alura.com.br/">
          <img
            src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
            alt="Logo Alura"
          />
        </a>
      </span>
    </FooterBase>
  );
}

export default Footer;
