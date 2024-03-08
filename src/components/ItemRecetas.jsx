import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarRecetaAPI, mostrarRecetaAPI } from "../helpers/queries";
import { Link } from "react-router-dom";



const ItemRecetas = ({ receta, funcionSetReceta }) => {
  
  const borrarRecetas = () => {
    Swal.fire({
      title: "Estas Seguro de Eliminar la Receta?",
      text: "Una Vez Aceptado no podra recuperar su receta!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async result => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaAPI(receta.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "La Receta fue eliminada ",
            text: `La Receta "${receta.nombreRecetas}" fue eliminada exitosamente`,
            icon: "success",
          });
          const respuestaReceta = await mostrarRecetaAPI();
          if (respuestaReceta.status === 200) {
            const recetaAlmacenadas = await respuestaReceta.json();
            funcionSetReceta(recetaAlmacenadas);
          } else {
            Swal.fire({
              title: "Ha ocurrido un error ",
              text: `No se econtraron las Recetas`,
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Ha ocurrido un error ",
            text: `La Receta "${receta.nombreRecetas}" no pudo ser eliminada intentalo en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreRecetas}</td>
      <td>
        {" "}
        <img
          src={receta.imagen}
          alt={receta.nombreRecetas}
          className="img-fluid "
          width={100}
        />
      </td>
      <td>{receta.ingredientes}</td>
      <td>{receta.descripcion}</td>
      <td>{receta.instrucciones}</td>
      <td>
        <Link
          className="me-lg-2 btn btn-warning"
          to={"/admin/edit/" + receta.id}
        >
          editar
        </Link>
        <Button variant="danger" onClick={borrarRecetas}>
          {" "}
          delete
        </Button>
      </td>
    </tr>
  );
};

export default ItemRecetas;
