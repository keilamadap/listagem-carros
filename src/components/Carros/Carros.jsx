import * as S from "./styles";

const Carros = ({ modelo, ano, marca, valor, cor }) => {
  const formatarTexto = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  };

  return (
    <S.Div>
      <S.Paragraph>
        Ano de Lançamento:
        <S.Info>{ano}</S.Info>
      </S.Paragraph>
      <S.Paragraph>
        Valor:
        <S.Info>R${valor.toFixed(3).replace(".", ",")}</S.Info>
      </S.Paragraph>
      <S.Paragraph>
        Nome/Modelo:
        <S.Info>{formatarTexto(modelo)}</S.Info>
      </S.Paragraph>
      <S.Paragraph>
        Cor:
        <S.Info>{formatarTexto(cor)}</S.Info>
      </S.Paragraph>
    </S.Div>
  );
};

export default Carros;
