import { useContext, useState } from "react";
import * as S from "./styles";
import { MyContext } from "../../context/CarContext";
import { numberToCoin, coinToNumber } from "../../utils/formatNumber";

const Form = ({ closeModal }) => {
  const [year, setYear] = useState("");
  const [value, setValue] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [message, setMessage] = useState("");
  const { cars, setCars } = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedValue = numberToCoin(value);

    if (year && value && color && model !== "") {
      const newCar = {
        id: Math.random(),
        ano: year,
        num_portas: 4,
        combustivel: "flex",
        modelo_id: Math.random(),
        timestamp_cadastro: Math.random(),
        valor: parseFloat(formattedValue),
        nome_modelo: model.toUpperCase(),
        cor: color,
        brand: 1,
      };

      setCars([...cars, newCar]);

      setYear("");
      setValue("");
      setColor("");
      setModel("");
      setMessage(null);
      closeModal();
    } else {
      setMessage("Preencha todos os dados do formulário");
    }
  };

  return (
    <S.Div>
      <S.Title>Adicionar novo carro:</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label>Ano de lançamento:</S.Label>
        <S.Input
          type="text"
          placeholder="2014"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <S.Label>Valor de Mercado:</S.Label>
        <S.Input
          type="text"
          placeholder="R$50.000"
          value={numberToCoin(value)}
          onChange={(e) => {
            const formattedValue = coinToNumber(e.target.value);
            setValue(formattedValue);
          }}
        />
        <S.Label>Selecione o modelo:</S.Label>
        <S.Select value={model} onChange={(e) => setModel(e.target.value)}>
          <S.Option value="Corolla">Corolla</S.Option>
          <S.Option value="Etios">Etios</S.Option>
          <S.Option value="Hillux Sw4">Hillux</S.Option>
        </S.Select>
        <S.Label>Cor:</S.Label>
        <S.Input
          type="text"
          placeholder="Amarelo"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <S.ButtonContainer>
          {message && message}
          <S.Button type="submit">Enviar</S.Button>
        </S.ButtonContainer>
      </S.Form>
    </S.Div>
  );
};

export default Form;
