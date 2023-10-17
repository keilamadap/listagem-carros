import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  min-width: 170px;
  height: 150px;
  gap: 5px;
  border: 1px solid #c6c6c6;
  padding: 10px;
  border-radius: 6px;
  background-color: #fff;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);
  box-shadow: 2px 2px 5px 0px rgba(194, 194, 194, 1);
`;

export const Paragraph = styled.p`
  text-align: start;
  color: #bd8500;
`;

export const Info = styled.span`
  padding-left: 5px;
  font-weight: 600;
`;
