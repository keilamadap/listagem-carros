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

  @media (max-width: 500px) {
    gap: 0;
  }
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
    color: #f0aa00;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    width: 50px;
  }
`;

export const Button = styled.button`
  background-color: #ffb300;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border: none;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #f0aa00;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    width: 100px;
  }
`;
