import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeComponent from './components/Welcome/WelcomeComponent';
import LoginComponent from './components/Login/LoginComponent';
import RegisterComponent from './components/Register/RegisterComponent';
import ProfileComponent from './components/Profile/ProfileComponent';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const AppShell = styled.div`
  width: 375px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <AppShell>
        <Routes>
          <Route path="/" element={<WelcomeComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/account" element={<ProfileComponent />} />
        </Routes>
      </AppShell>
    </Container>
  );
}

export default App;