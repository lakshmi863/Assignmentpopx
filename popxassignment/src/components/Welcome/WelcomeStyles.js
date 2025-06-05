import styled from 'styled-components';

export const Screen = styled.div`
  padding: 24px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  margin-top: 8px;
  margin-bottom: 24px;
  color: #6c6c6c;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.secondary ? '#ccc' : '#6C25FF')};
  color: white;
  font-weight: bold;
`;
