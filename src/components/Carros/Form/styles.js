import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  background-color: #e8e8e8;
  padding: 15px;
  border-radius: 5px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 5px;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 5px;
  background-color: #ffb300;
  border: none;
  color: #fff;
  border-radius: 6px;
  width: 200px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #b27d00;
  }
`;
