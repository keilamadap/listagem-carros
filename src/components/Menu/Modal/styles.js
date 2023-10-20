import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #e8e8e8;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CloseButton = styled.button`
  width: 100px;
  background-color: #ffb300;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    background-color: #b27d00;
  }
`;
