// src/components/Register/RegisterComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Screen,
  Title,
  Input,
  Button,
  Form,
  Fieldset,
  Legend,
  RadioGroup,
} from './RegisterStyles';

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

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

    if (!formData.agency) {
      newErrors.agency = 'Please select an option';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      navigate('/account');
    }
  };

  return (
    <Screen>
      <Title>Create your PopX account</Title>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <Legend>Full Name {errors.name && <span>*</span>}</Legend>
          <Input name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
        </Fieldset>

        <Fieldset>
          <Legend>Phone Number {errors.phone && <span>*</span>}</Legend>
          <Input name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
        </Fieldset>

        <Fieldset>
          <Legend>Email {errors.email && <span>*</span>}</Legend>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
          {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        </Fieldset>

        <Fieldset>
          <Legend>Password {errors.password && <span>*</span>}</Legend>
          <Input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
          {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
        </Fieldset>

        <Fieldset>
          <Legend>Company Name</Legend>
          <Input name="company" value={formData.company} onChange={handleChange} />
        </Fieldset>

        <RadioGroup>
          <Legend>
            Are you an agency? {errors.agency && <span>*</span>}
          </Legend>
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              onChange={handleChange}
              checked={formData.agency === 'yes'}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              onChange={handleChange}
              checked={formData.agency === 'no'}
            />
            No
          </label>
          {errors.agency && <small style={{ color: 'red' }}>{errors.agency}</small>}
        </RadioGroup>

        <Button type="submit">Create Account</Button>
      </Form>
    </Screen>
  );
};

export default RegisterComponent;
