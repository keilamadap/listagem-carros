import styled from "styled-components";

export const Div = styled.div`
  position: fixed; /* Para fixar a barra de navegação na parte superior */
  top: 0;
  left: 0;
  width: 100%; /* Pegar toda a largura da tela */
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #fff;
  z-index: 1; Para garantir que fique em cima de tudo
  padding: 10px;
  height: 50px;
  align-items: center;
  box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);
`;

export const Paragraph = styled.p`
  box-shadow: inset 0 0 0 0 #54b3d6;
  width: 100; /* Corrigido para width: 100%; */
  color: #282822;
  padding: 5px;
  margin: 0 -0.25rem;
  font-weight: 500;
  border-radius: 5px;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    padding: 5px;
    color: #fff;
    box-shadow: inset 200px 0 0 0 #54b3d6;
  }
`;
