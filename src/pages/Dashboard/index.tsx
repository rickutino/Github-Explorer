import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on Github</Title>

      <Form>
        <input placeholder="Type name of the repository" />
        <button type="submit">Search</button>
      </Form>
    </>
  );
};

export default Dashboard;
