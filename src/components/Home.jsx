import React, { useState, useEffect } from "react";
import CardRecetas from "./CardRecetas";
import { Row } from "react-bootstrap";
import { mostrarRecetaAPI } from "../helpers/queries";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";


const Home = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const obtenerRecetas = async () => {
      const respuesta = await mostrarRecetaAPI();
      const data = await respuesta.json();
      setRecetas(data);
    };

    obtenerRecetas();
  }, []);


  return (
    <>
      <section>
        <h1 className="text-center">Rolling Recetas</h1>
        <Row className="justify-content-around container  align-items-center mx-auto">
          {recetas.map((receta, index) => (
            <CardRecetas key={index} receta={receta}></CardRecetas>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Home;
