import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import ItemRecetas from "./ItemRecetas";
import { obtenerRecetaAPI } from "../helpers/queries";



const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState([]);
  useEffect(() => {
    const obtenerRecetasPorId = async () => {
      const respuesta = await obtenerRecetaAPI(id);
      const data = await respuesta.json();
      setReceta(data);
    };

    obtenerRecetasPorId();
  }, []);

  return (
    <Container className="my-3 mainSection d-flex">
     <Col md={6}>
            <Card.Img
              variant="top"
              src={receta.imagen}
              className="w-75"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{receta.nombreRecetas}</Card.Title>
              <hr />

              <Card.Text><b>Descripcion :</b><br/>{receta.descripcion}</Card.Text>
              <Card.Text><b>Instrucciones:</b><br/>{receta.instrucciones}</Card.Text>
              <Card.Text><b>Ingredientes:</b><br/>{receta.ingredientes}
              </Card.Text>
            </Card.Body>
          </Col>
    </Container>
  );
};

export default DetalleReceta;
