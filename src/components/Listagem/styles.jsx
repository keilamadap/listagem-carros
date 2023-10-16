import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);
  box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);
`;

export const Paragraph = styled.p`
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: #54b3d6;
  padding: 5px;
  margin: 0 -0.25rem;
  border-radius: 5px;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    padding: 5px;
    color: #fff;
    box-shadow: inset 200px 0 0 0 #54b3d6;
  }
`;

export const CarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 20px;
`;
