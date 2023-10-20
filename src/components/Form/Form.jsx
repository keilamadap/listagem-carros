/**
 * React component for adding a new car to the list.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {function} props.closeModal - A function to close the modal.
 * @returns {JSX.Element} A React component for adding a new car.
 */
import { useContext, useState } from "react";
import * as S from "./styles";
import { CarsContext } from "../../context/CarContext";
import { numberToCoin, coinToNumber } from "../../utils/formatNumber";

const Form = ({ closeModal }) => {
  /**
   * State for the car's year.
   * @type {string}
   */
  const [year, setYear] = useState("");

  /**
   * State for the car's value.
   * @type {string}
   */
  const [value, setValue] = useState("");

  /**
   * State for the car's model.
   * @type {string}
   */
  const [model, setModel] = useState("");

  /**
   * State for the car's color.
   * @type {string}
   */
  const [color, setColor] = useState("");

  /**
   * State for displaying a validation message.
   * @type {string|null}
   */
  const [message, setMessage] = useState("");

  /**
   * Accesses the car context for managing car data.
   * @type {object}
   */
  const { cars, setCars } = useContext(CarsContext);

  /**
   * Handles the form submission to add a new car.
   *
   * @param {Event} e - The form submission event.
   */
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
          onChange={(e) => {
            const inputValue = e.target.value.replace(/\D/g, "").slice(0, 4);
            setYear(inputValue);
          }}
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
