import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../components/PageDefault";
import { Section, Image, Return } from "./styles";

import myBoys from "../../assets/img/meninos.jpg";

function Erro404() {
  return (
    <PageDefault>
      <Section>
        <h1>Você tentou acessar uma página que não existe. </h1>
        <a
          href="https://www.facebook.com/Simba-Spitz-Alem%C3%A3o-825982940798700/?ref=aymt_homepage_panel&eid=ARBA2A6lFu_MRaQGaFK91I3flBTfQ2NGHYWWbEufoxCNDxbE2zXIQD4s_mVxIS9m6WdiYWIVE9-GZNz7"
          tagert="_blank"
        >
          <Image src={myBoys} alt="" />
        </a>
        <Return as={Link} to="/">
          Voltar para a página inicial
        </Return>
      </Section>
    </PageDefault>
  );
}

export default Erro404;
