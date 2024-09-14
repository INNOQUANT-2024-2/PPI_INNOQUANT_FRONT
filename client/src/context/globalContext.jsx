import React from "react";

let GlobalContext = React.createContext();

function ContextProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [isRegister, setIsRegister] = React.useState(false);

  // Manejo del registro de usuarios
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
        setIsRegister(false);
        throw new Error("Hubo un problema al realizar la petición: " + response.status);
      } else {
        setIsRegister(true);
        window.location.href = "/login"; // Redirigir al login después del registro exitoso
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
  };

  // Manejo del login
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.log("Formulario enviado, preventDefault ejecutado");

    const form = e.target;
    const formData = new FormData(form);

    const datos = {
      identificacion_usu: formData.get("identificacion_usu"),
      contra_usu: formData.get("contra_usu"),
    };

    console.log("Datos del formulario que se envían:", datos); // Asegúrate de que estos datos sean correctos

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

      // Verifica el código de respuesta
      if (response.status === 200) {
        const data = await response.json(); // Asegúrate de que esta línea sea después de la verificación de estado
        console.log("Respuesta JSON recibida:", data);

        setMessage(data.message); // Mensaje en caso de éxito
        setIsRegister(true); // Cambia el estado de registro
        window.location.href = "/inicio"; // Redirigir a la página de inicio en caso de éxito
      } else if (response.status === 400 || response.status === 401) {
        setIsRegister(false);
        setMessage("Identificación o contraseña incorrecta");
      } else {
        setIsRegister(false);
        setMessage("Hubo un problema al iniciar sesión, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al realizar la petición:", error);
      setIsRegister(false);
      setMessage("Error al realizar la petición.");
    }
};

  return (
    <GlobalContext.Provider
      value={{
        message,
        setMessage,
        isRegister,
        setIsRegister,
        handleSubmit,
        handleSubmitLogin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, ContextProvider };
