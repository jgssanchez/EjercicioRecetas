const API_receta = import.meta.env.VITE_API_RECETAS;

export const altaDeRecetasApi = async recetaNueva => {
  try {
    const respuesta = await fetch(API_receta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
    
  }
};

export const mostrarRecetaAPI = async () => {
  try {
    const respuesta = await fetch(API_receta);
    return respuesta;
  } catch (error) {
    
  }
};


export const borrarRecetaAPI = async id => {
  try {
    const respuesta = await fetch(`${API_receta}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    
  }
};

export const obtenerRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${API_receta}/${id}`);
    return respuesta;
  } catch (error) {
    
  }
};

export const modificarRecetaAPI = async (recetaEdit, id) => {
  try {
    const respuesta = await fetch(`${API_receta}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaEdit),
    });
    return respuesta;
  } catch (error) {
    
  }
};

const userAdmin = {
  email: "admin@admin.com",
  password: "Admin123",
};
export const iniciarSesion = usuario => {
  if (
    usuario.email === userAdmin.email &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem("loginReceta", JSON.stringify(userAdmin.email));
    return true;
  } else {
    return false;
  }
};
