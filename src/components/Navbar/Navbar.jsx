import { useNavContext } from "../../context/NavContext";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { setModeloSelecionado, showAllCars } = useNavContext();
  const navigate = useNavigate();

  return (
    <S.Div>
      <S.Paragraph onClick={showAllCars}>Todos os Modelos</S.Paragraph>
      <S.Paragraph onClick={() => setModeloSelecionado("ETIOS")}>
        Etios
      </S.Paragraph>
      <S.Paragraph onClick={() => setModeloSelecionado("COROLLA")}>
        Corolla
      </S.Paragraph>
      <S.Paragraph onClick={() => setModeloSelecionado("HILLUX SW4")}>
        Hillux SW4
      </S.Paragraph>

      <div style={{ display: "flex", justifyContent: "end", width: "50%" }}>
        <S.Paragraph onClick={() => navigate("/novo")}>Novo Carro</S.Paragraph>
      </div>
    </S.Div>
  );
};

export default Navbar;
