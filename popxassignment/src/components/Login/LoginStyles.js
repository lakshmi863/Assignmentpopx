// src/components/Login/LoginStyles.js
import styled from 'styled-components';

export const Screen = styled.div`
  padding: 24px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Fieldset = styled.fieldset`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 12px;
`;

export const Legend = styled.legend`
  font-size: 14px;
  font-weight: bold;
  color: #6C25FF;

  span {
    color: red;
    margin-left: 4px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #6C25FF;
  color: white;
  font-weight: bold;
`;
