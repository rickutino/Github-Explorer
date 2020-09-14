import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://pbs.twimg.com/profile_images/1300177327221927936/ksGbaONc_400x400.jpg"
            alt="Ricardo Utino"
          />
          <div>
            <strong>rickutino/SpotCode</strong>
            <p>Spotify copy site.</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/test">
          <div>
            <strong>SpotCode</strong>
            <p>Spotify copy site.</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
