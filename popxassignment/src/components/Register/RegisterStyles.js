import styled from 'styled-components';

export const Screen = styled.div`
  padding: 24px;
`;

export const Title = styled.h2`
  font-size: 20px;
   font-family: Monospace;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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

export const RadioGroup = styled(Fieldset)`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;
    display: flex;
    align-items: center;
    gap: 8px;

    input[type="radio"] {
      accent-color: #6C25FF;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #6C25FF;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background-color: #5a1de0;
  }
`;
