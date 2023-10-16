import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavContext = createContext();

export const useNavContext = () => useContext(NavContext);

export function NavProvider({ children }) {
  const navigate = useNavigate();
  const [modeloSelecionado, setModeloSelecionado] = useState(null);

  const handleFilterChange = (modelo) => {
    setModeloSelecionado(modelo);
    console.log(modelo);
  };

  const showAllCars = () => {
    setModeloSelecionado(null);
    navigate("/");
  };

  return (
    <NavContext.Provider
      value={{
        modeloSelecionado,
        handleFilterChange,
        setModeloSelecionado,
        showAllCars,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}
