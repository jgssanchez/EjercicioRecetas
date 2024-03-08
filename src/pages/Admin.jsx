import { Button, Container, Table,} from 'react-bootstrap';
import ItemRecetas from '../components/ItemRecetas';

import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { mostrarRecetaAPI } from '../helpers/queries';
import Swal from 'sweetalert2';

const Admin = () => {

  const [receta,setReceta]= useState([]);
  
  useEffect(()=>{
    obtenerRecetas();
   
  },[])

  const obtenerRecetas = async()=>{
    const respuesta= await mostrarRecetaAPI();
    if(respuesta.status === 200){
     const  datos = await respuesta.json()
     setReceta(datos)
    }else{
      Swal.fire({
        title: "Receta no cargada",
        text: `La Receta "${recetas.nombreRecetas}" no pudo ser creada, intentelo mas tarde!`,
        icon: "error"
      });
    }
  }

  return (
    <Container className=' table-responsive'>
      <div className=' text-center d-flex justify-content-between align-items-center mt-4'>
        <h1>Administrador De Recetas</h1>
      <Button as={Link} to='/admin/formRecetas'>Nueva Recetas</Button>

      </div>
      <Table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>URL</th>
          <th>Ingredientes</th>
          <th>Descripción</th>
          <th>Instrucciones</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {
          receta.map((receta, index)=> <ItemRecetas key={index} receta={receta} funcionSetReceta={setReceta} />)
        }
      </tbody>
    </Table>
    </Container>
  );
};
 
export default Admin;
