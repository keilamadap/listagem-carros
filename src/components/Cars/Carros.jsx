/**
 * React component for displaying car details.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {string} props.model - The model of the car.
 * @param {number} props.year - The year of the car.
 * @param {string} props.brand - The brand of the car.
 * @param {number} props.value - The value of the car.
 * @param {string} props.color - The color of the car.
 * @returns {JSX.Element} A React component for displaying car details.
 */
import * as S from "./styles";

const Carros = ({ model, year, brand, value, color }) => {
  /**
   * Capitalizes the first letter and makes the rest of the text lowercase.
   *
   * @param {string} text - The text to format.
   * @returns {string} The formatted text.
   */
  const formatText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <S.Div>
      <S.Paragraph>
        Modelo:
        <S.Info>{formatText(model)}</S.Info>
      </S.Paragraph>
      <S.Paragraph>
        Ano :<S.Info>{year}</S.Info>
      </S.Paragraph>
      <S.Paragraph>
        Valor:
        <S.Info>R${value.toFixed(3).replace(".", ",")}</S.Info>
      </S.Paragraph>
      <S.Paragraph>
        Cor:
        <S.Info>{formatText(color)}</S.Info>
      </S.Paragraph>
    </S.Div>
  );
};

export default Carros;
