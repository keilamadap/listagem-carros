import React from "react";
import "./App.css";
import ListagemCarros from "./components/List/ListagemCarros";
import { MyContextProvider } from "./context/CarContext";
import Menu from "./components/Menu/Menu";

/**
 * The main application component.
 * @component
 */
function App() {
  return (
    <MyContextProvider>
      <Menu />
      <ListagemCarros />
    </MyContextProvider>
  );
}

export default App;
