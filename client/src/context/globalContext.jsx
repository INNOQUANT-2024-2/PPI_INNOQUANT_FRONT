import React from "react";

let GlobalContext = React.createContext();

function ContextProvider ({children}){
  const [message, setMessage] =React.useState(""); 
  const [isRegister, setIsRegister] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const datos = {
      identificacion_usu: formData.get("identificacion_usu"),
      nombre_usu: formData.get("nombre_usu"),
      apellido1_usu: formData.get("apellido1_usu"),
      apellido2_usu: formData.get("apellido2_usu") || "",
      contra_usu: formData.get("contra_usu"),
      rol_usu: formData.get("rol_usu"),
    };

    const url = "http://localhost:3000/api/users";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });
      
      if (!response.ok) { 
       setIsRegister(false)
        throw new Error(
          "Hubo un problema al realizar la petición: " + response.status
        );
      }else{
       setIsRegister(true);
       window.location.href = "/login";
      }
      
      const data = await response.json();
      console.log("Respuesta recibida:", data);
      console.log("Respuesta recibida:", setMessage(data.message));
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.log("Formulario enviado, preventDefault ejecutado");
  
    const form = e.target;
    const formData = new FormData(form);
  
    const datos = {
      nombre_usu: formData.get("nombre_usu"),
      contra_usu: formData.get("contra_usu"),
    };
  
    console.log("Datos del formulario:", datos);
  
    const url = "http://localhost:3000/api/usersLogin";
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });
  
      console.log("Respuesta del servidor:", response);
  
      if (!response.ok) {
        setIsRegister(false);
        throw new Error(
          "Hubo un problema al realizar la petición: " + response.status
        );
      }
  
      const data = await response.json();
      console.log("Respuesta recibida:", data);
  
      setMessage(data.message);
      setIsRegister(true);
      window.location.href = "/login";
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
  };
  
  console.log(isRegister, 23)
  
  return (
    <GlobalContext.Provider value={{message, setMessage, isRegister, setIsRegister, handleSubmit, handleSubmitLogin}}>
      {children}
    </GlobalContext.Provider>
  );
}

export {GlobalContext, ContextProvider};
