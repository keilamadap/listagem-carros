import Carros from "../Carros/Carros";
import { carsByBrand } from "../../data/cars";
import { useEffect, useState } from "react";
import * as S from "./styles";

function ListagemCarros() {
  const [modeloSelecionado, setModeloSelecionado] = useState(null);

  const getCarros = async () => {
    try {
      const response = await fetch("https://wswork.com.br/cars_by_brand.json");
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarTodosCarros = () => {
    setModeloSelecionado(null);
  };

  const carrosFiltrados = carsByBrand?.cars.filter(
    (car) => modeloSelecionado === null || car.nome_modelo === modeloSelecionado
  );

  // useEffect(() => {
  //   getCarros();
  // }, []);

  return (
    <>
      <S.Div>
        <S.Paragraph onClick={mostrarTodosCarros}>Todos os Modelos</S.Paragraph>
        <S.Paragraph onClick={() => setModeloSelecionado("ETIOS")}>
          Etios
        </S.Paragraph>
        <S.Paragraph onClick={() => setModeloSelecionado("COROLLA")}>
          Corolla
        </S.Paragraph>
        <S.Paragraph onClick={() => setModeloSelecionado("HILLUX SW4")}>
          Hillux SW4
        </S.Paragraph>
      </S.Div>

      <S.CarContainer>
        {carrosFiltrados?.map((car) => (
          <Carros
            key={car.id}
            modelo={car.nome_modelo}
            ano={car.ano}
            valor={car.valor}
            marca={car.brand}
            cor={car.cor}
          />
        ))}
      </S.CarContainer>
    </>
  );
}

export default ListagemCarros;
