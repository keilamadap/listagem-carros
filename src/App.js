import React from "react";
import "./App.css";
import ListagemCarros from "./components/Listagem/ListagemCarros";
import { MyContextProvider } from "./context/CarContext";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <MyContextProvider>
      <Menu />
      <ListagemCarros />
    </MyContextProvider>
  );
}

export default App;
