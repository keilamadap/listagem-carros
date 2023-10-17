import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  position: fixed;
  gap: 2rem;
  background-color: #fff;
  padding: 10px;
  box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  color: #282822;
  padding: 5px;
  font-weight: 500;
  border-radius: 5px;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    padding: 5px;
    color: #54b3d6;
  }
`;

export const Button = styled.button`
  background-color: #ffb300;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border: none;

  &:hover {
    background-color: #f0aa00;
  }
`;
