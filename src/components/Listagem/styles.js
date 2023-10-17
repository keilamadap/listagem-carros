import styled from "styled-components";

export const CarContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  align-items: center;
  gap: 1rem;
  width: 100%;
  /* margin-left: 200px; */
  flex-wrap: wrap;
  height: 250px;
  padding: 20px;
`;

export const Div = styled.div`
  width: 200px;
  left: 0;
  top: 0;
  position: fixed;
  gap: 2rem;
  background-color: #fff;
  padding: 10px;
  height: 100%;
  box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);
`;

export const Paragraph = styled.p`
  box-shadow: inset 0 0 0 0 #54b3d6;
  width: 100%;
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

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;
