import * as S from "./styles";

const Carros = ({ model, year, brand, value, color }) => {
  const formatText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <S.Div>
      <S.Paragraph>
        Ano de Lançamento:
        <S.Info>{year}</S.Info>
      </S.Paragraph>
      <S.Paragraph>
        Valor:
        <S.Info>R${value.toFixed(3).replace(".", ",")}</S.Info>
      </S.Paragraph>
      <S.Paragraph>
        Nome/Modelo:
        <S.Info>{formatText(model)}</S.Info>
      </S.Paragraph>
      <S.Paragraph>
        Cor:
        <S.Info>{formatText(color)}</S.Info>
      </S.Paragraph>
    </S.Div>
  );
};

export default Carros;
