/**
 * React component for a simple modal dialog.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {boolean} props.isOpen - A flag to control the visibility of the modal.
 * @param {function} props.closeModal - A function to close the modal.
 * @param {ReactNode} props.children - The content to be displayed within the modal.
 * @returns {JSX.Element|null} A React component representing a modal dialog.
 */
import React from "react";
import * as S from "./styles";

function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.CloseContainer>
          <S.CloseButton onClick={closeModal}>Fechar</S.CloseButton>
        </S.CloseContainer>
        {children}
      </S.ModalContent>
    </S.ModalOverlay>
  );
}

export default Modal;
