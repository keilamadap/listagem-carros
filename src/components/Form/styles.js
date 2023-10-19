import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  flex-direction: column;
  background-color: #e8e8e8;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    width: 400px;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  margin-bottom: 2rem;
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
  outline: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  margin-top: 25px;
  padding: 5px;
  background-color: #ffb300;
  border: none;
  height: 30px;
  color: #fff;
  border-radius: 6px;
  width: 200px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #b27d00;
  }
`;

export const Select = styled.select`
  height: 25px;
`;

export const Option = styled.option``;
