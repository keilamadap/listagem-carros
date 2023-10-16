import Carros from "../Carros/Carros";
import { carsByBrand } from "../../data/cars";
import * as S from "./styles";
import { useNavContext } from "../../context/NavContext";

function ListagemCarros() {
  const { modeloSelecionado } = useNavContext();

  const carrosFiltrados = carsByBrand?.cars.filter(
    (car) => modeloSelecionado === null || car.nome_modelo === modeloSelecionado
  );

  return (
    <>
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
