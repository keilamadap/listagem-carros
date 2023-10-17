import Carros from "../Carros/Carros";
import * as S from "./styles";
import { useContext, useState } from "react";
import { MyContext } from "../../context/CarContext";

function ListagemCarros() {
  const [selectedModel, setSelectedModel] = useState(null);
  const { cars } = useContext(MyContext);

  const showAllCars = () => {
    setSelectedModel(null);
  };

  const filteredCars = cars?.filter(
    (car) =>
      selectedModel === null || car.nome_modelo === selectedModel.toUpperCase()
  );

  return (
    <>
      <S.Div>
        <S.Paragraph onClick={showAllCars}>Todos os Modelos</S.Paragraph>
        <S.Paragraph onClick={() => setSelectedModel("ETIOS")}>
          Etios
        </S.Paragraph>
        <S.Paragraph onClick={() => setSelectedModel("COROLLA")}>
          Corolla
        </S.Paragraph>
        <S.Paragraph onClick={() => setSelectedModel("HILLUX SW4")}>
          Hillux SW4
        </S.Paragraph>
      </S.Div>
      <S.Title>Listagem dos Carros:</S.Title>
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
    </>
  );
}

export default ListagemCarros;
