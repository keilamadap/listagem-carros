import React from "react";
import "./App.css";
import ListagemCarros from "./components/List/ListagemCarros";
import { CarsContextProvider } from "./context/CarContext";
import Menu from "./components/Menu/Menu";

/**
 * The main application component.
 * @component
 */
function App() {
  return (
    <CarsContextProvider>
      <Menu />
      <ListagemCarros />
    </CarsContextProvider>
  );
}

export default App;
