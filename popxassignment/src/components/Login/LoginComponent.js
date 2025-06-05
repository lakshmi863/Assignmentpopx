// src/components/Login/LoginComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Screen, Fieldset, Legend, Input, Button, Title } from './LoginStyles';

const LoginComponent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate('/account');
    }
  };

  return (
    <Screen>
      <Title>Sign in to your PopX account</Title>

      <Fieldset>
        <Legend>
          Email {errors.email && <span>*</span>}
        </Legend>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && (
          <small style={{ color: 'red', fontSize: '12px' }}>{errors.email}</small>
        )}
      </Fieldset>

      <Fieldset>
        <Legend>
          Password {errors.password && <span>*</span>}
        </Legend>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && (
          <small style={{ color: 'red', fontSize: '12px' }}>{errors.password}</small>
        )}
      </Fieldset>

      <Button type="button" onClick={handleSubmit}>
        Login
      </Button>
    </Screen>
  );
};

export default LoginComponent;
