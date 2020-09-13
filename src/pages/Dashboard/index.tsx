import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on Github</Title>

      <Form>
        <input placeholder="Type name of the repository" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://pbs.twimg.com/profile_images/1300177327221927936/ksGbaONc_400x400.jpg"
            alt="Ricardo Utino"
          />
          <div>
            <strong>SpotCode</strong>
            <p>Spotify copy site.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://pbs.twimg.com/profile_images/1300177327221927936/ksGbaONc_400x400.jpg"
            alt="Ricardo Utino"
          />
          <div>
            <strong>SpotCode</strong>
            <p>Spotify copy site.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://pbs.twimg.com/profile_images/1300177327221927936/ksGbaONc_400x400.jpg"
            alt="Ricardo Utino"
          />
          <div>
            <strong>SpotCode</strong>
            <p>Spotify copy site.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://pbs.twimg.com/profile_images/1300177327221927936/ksGbaONc_400x400.jpg"
            alt="Ricardo Utino"
          />
          <div>
            <strong>SpotCode</strong>
            <p>Spotify copy site.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://pbs.twimg.com/profile_images/1300177327221927936/ksGbaONc_400x400.jpg"
            alt="Ricardo Utino"
          />
          <div>
            <strong>SpotCode</strong>
            <p>Spotify copy site.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://pbs.twimg.com/profile_images/1300177327221927936/ksGbaONc_400x400.jpg"
            alt="Ricardo Utino"
          />
          <div>
            <strong>SpotCode</strong>
            <p>Spotify copy site.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
