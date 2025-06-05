import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Screen, Title, SubTitle, Button } from './WelcomeStyles';

const WelcomeComponent = () => {
  const navigate = useNavigate();
  return (
    <Screen>
      <Title>Welcome to PopX</Title>
      <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
      <Button onClick={() => navigate('/register')}>Create Account</Button>
      <Button secondary onClick={() => navigate('/login')}>Already Registered? Login</Button>
    </Screen>
  );
};

export default WelcomeComponent;