import React from "react";
import "./App.css";
import ListagemCarros from "./components/Listagem/ListagemCarros";
import Form from "./components/Carros/Form/Form";
import { MyContextProvider } from "./context/CarContext";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "1000px",
      }}
    >
      <MyContextProvider>
        <ListagemCarros />
        <Form />
      </MyContextProvider>
    </div>
  );
}

export default App;
