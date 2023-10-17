import Carros from "../Carros/Carros";
import * as S from "./styles";
import { useContext } from "react";
import { MyContext } from "../../context/CarContext";

function ListagemCarros() {
  const { cars, selectedModel } = useContext(MyContext);

  const filteredCars = cars?.filter(
    (car) =>
      selectedModel === null || car.nome_modelo === selectedModel.toUpperCase()
  );

  return (
    <S.Container>
      <S.Title>Nossos Carros:</S.Title>
      <S.CarContainer>
        {filteredCars?.map((car) => (
          <Carros
            key={car.id}
            model={car.nome_modelo}
            year={car.ano}
            value={car.valor}
            brand={car.brand}
            color={car.cor}
          />
        ))}
      </S.CarContainer>
    </S.Container>
  );
}

export default ListagemCarros;
