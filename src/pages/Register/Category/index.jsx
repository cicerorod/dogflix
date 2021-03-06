import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Uniqid from "uniqid";

import categoriesRepository from "../../../repositories/categories";

import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import Loading from "../../../components/Loading";

import useForm from "../../../hooks/useForm";
import config from "../../../config";

// customHook sempre tem 'use' como sufixo no nomte

function RegisterCategory() {
  const initialValues = {
    titulo: "",
    cor: "#000000",
    subtitulo: "",
    url: "",
  };

  const { values, handleChange, clearForm } = useForm(initialValues);

  // gera as categorias e o setter
  const [categories, setCategories] = useState([]);

  function submitCategory(event) {
    event.preventDefault();
    categoriesRepository
      .setNewCategory(values)
      .then(() => {
        setCategories([...categories, values]);
        clearForm();
      })
      .catch((error) => {
        window.console.warn("Tratar o erro e mostrar", error);
      });
  }

  useEffect(() => {
    window
      .fetch(`${config.URL_BACKEND}/categorias`)
      .then(async (serverResponse) => {
        const result = await serverResponse.json();
        setCategories([...result]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>{`Cadastro de Categoria: ${values.titulo}`}</h1>

      <form onSubmit={submitCategory}>
        <FormField
          label="Titulo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          as="input"
        />
        <FormField
          label="Sub-título"
          type="text"
          name="subtitulo"
          value={values.subtitulo}
          onChange={handleChange}
          as="input"
        />
        <FormField
          label="URL do sub-título da categoria"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
          as="input"
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
          as="input"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      {categories.length === 0 && <Loading />}

      <table>
        <tbody>
          {categories.map((item) => (
            <tr key={Uniqid()}>
              <td style={{ borderBottomColor: item.cor }}>{item.titulo}</td>
              <td style={{ borderBottomColor: item.cor }}>{item.subtitulo}</td>
              <td style={{ borderBottomColor: item.cor }}>
                <span style={{ backgroundColor: item.cor }}>{item.cor}</span>
              </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th>Título:</th>
            <th>Sub-título:</th>
            <th>Cor:</th>
          </tr>
        </thead>
      </table>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default RegisterCategory;
