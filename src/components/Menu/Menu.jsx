import * as S from "./styles";
import { useContext, useState } from "react";
import { MyContext } from "../../context/CarContext";
import Modal from "./Modal/Modal";
import Form from "../Form/Form";

const Menu = () => {
  const { setSelectedModel, showAllCars } = useContext(MyContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Div>
      <S.Paragraph onClick={showAllCars}>Todos </S.Paragraph>
      <S.Paragraph onClick={() => setSelectedModel("ETIOS")}>Etios</S.Paragraph>
      <S.Paragraph onClick={() => setSelectedModel("COROLLA")}>
        Corolla
      </S.Paragraph>
      <S.Paragraph onClick={() => setSelectedModel("HILLUX SW4")}>
        Hillux
      </S.Paragraph>
      <S.Button onClick={openModal}>Novo Carro</S.Button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {" "}
        <Form closeModal={closeModal} />
      </Modal>
    </S.Div>
  );
};

export default Menu;
