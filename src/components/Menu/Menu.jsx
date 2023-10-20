/**
 * React component for the menu and car selection.
 *
 * @component
 * @returns {JSX.Element} A React component for menu and car selection.
 */
import * as S from "./styles";
import { useContext, useState } from "react";
import { CarsContext } from "../../context/CarContext";
import Modal from "./Modal/Modal";
import Form from "../Form/Form";

const Menu = () => {
  /**
   * Accesses the car context to set the selected car model and show all cars.
   *
   * @type {object}
   */
  const { setSelectedModel, showAllCars } = useContext(CarsContext);

  /**
   * State to manage the visibility of the modal.
   *
   * @type {boolean}
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Opens the modal for adding a new car.
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Closes the modal.
   */
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
