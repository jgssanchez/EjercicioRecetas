import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { altaDeRecetasApi, modificarRecetaAPI, obtenerRecetaAPI } from "../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";


const FormRecetas = ({ editar,titulo }) => {
  const {
   
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

const {id}= useParams();
const redireccionAdmin = useNavigate();

useEffect(()=>{
if(editar){
  cargarRecetas()
 
}
},[])

const cargarRecetas = async ()=>{
  const respuesta = await obtenerRecetaAPI(id)
  if(respuesta.status === 200){
    const recetaBuscada = await respuesta.json();
    setValue('nombreRecetas', recetaBuscada.nombreRecetas);
    setValue('imagen', recetaBuscada.imagen);
    setValue('ingredientes', recetaBuscada.ingredientes);
    setValue('instrucciones', recetaBuscada.instrucciones);
    setValue('descripcion', recetaBuscada.descripcion);
  }
}

  const onSubmit = async recetas => {
    if (editar) {
     const respuesta= await modificarRecetaAPI(recetas,id);
     if(respuesta.status === 200){
      Swal.fire({
        title: "Receta modificada!",
        text: `su receta"${recetas.nombreRecetas}" fue modificada correctamente`,
        icon: "success",
      });
      redireccionAdmin('/admin');
     }else{
      Swal.fire({
        title: "Error al modificar!",
        text: `La Receta "${recetas.nombreRecetas}" no pudo ser moficada intente mas tarde`,
        icon: "error",
      });
     }

    } else {
      const respuesta = await altaDeRecetasApi(recetas);

      if (respuesta.status === 201) {
        Swal.fire({
          title: "Receta Cargada!",
          text: `La Receta "${recetas.nombreRecetas}" fue cargada correctamente`,
          icon: "success",
        });
       
        reset();
      } else {
        Swal.fire({
          title: "Receta no cargada",
          text: `La Receta "${recetas.nombreRecetas}" no pudo ser creada, intentelo mas tarde!`,
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <h1 className=" text-center">{titulo}</h1>
      <Form
        className="container py-4 form-bg "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group controlId="formTitle">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa su receta"
            {...register("nombreRecetas", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 5,
                message: "Minimo de Caracteres 5",
              },
              maxLength: {
                value: 30,
                message: "Maximo de caracteres 40",
              },
              pattern: {
                value: /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s.,;:'"()¡!¿?]+$/,  
                message: "Los numeros no estan permitidos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreRecetas?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formTitle">
          <Form.Label>URL de imagen:</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL:"
            {...register("imagen", {
              required: "Este campo es Obligatio",
              minLength: {
                value: 10,
                message: "Minimo de Caracteres 10",
              },
              maxLength: {
                value: 250,
                message: "Maximo de Caracteres 500",
              },
              pattern: {
                value: /\.(jpeg|jpg|gif|png)$/i,
                message: "Ingresa una URL válida de imagen (jpeg, jpg, gif, png)"
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formIngredients">
          <Form.Label>Ingredientes:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Este campo es obligatorio"
            {...register("ingredientes", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 4,
                message: "Minimo de caracteres Permitido es de 4",
              },
              maxLength: {
                value: 200,
                message: "Maximo Caracteres Permitido es de 200",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formInstructions">
          <Form.Label>Instrucciones:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Instrucciones"
            {...register("instrucciones", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 4,
                message: "minimo 4 caracteres",
              },
              maxLength: {
                value: 1000,
                message: "maximo 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.instrucciones?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formAuthor">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa una descripción breve"
            {...register("descripcion", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 4,
                message: "minimo 4 caracteres",
              },
              maxLength: {
                value: 300,
                message: "maximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>

        <Button className="mt-4" variant="primary" type="submit">
          Guardar Receta
        </Button>
      </Form>
    </>
  );
};

export default FormRecetas;
