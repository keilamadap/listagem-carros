/**
 * Represents a component that displays a list of cars filtered by model.
 *
 * @component
 */
import Carros from "../Cars/Carros";
import * as S from "./styles";
import { useContext } from "react";
import { MyContext } from "../../context/CarContext";

/**
 * ListagemCarros component displays a list of cars filtered by a selected car model.
 *
 * @returns {JSX.Element} A React component to display the list of cars.
 */
function ListagemCarros() {
  const { cars, selectedModel } = useContext(MyContext);

  /**
   * Filters the cars based on the selected car model.
   *
   * @type {Array}
   */
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
