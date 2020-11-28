import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header/index';

import { List } from './styles';

interface UserParams {
  username: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repositories, setRepositores] = useState<Repository[]>([]);

  const { params } = useRouteMatch<UserParams>();

  useEffect(() => {
    api.get(`users/${params.username}/repos`).then(response => {
      setRepositores(response.data);
    });
  });

  return (
    <>
      <Header />
      {repositories.map(repository => (
        <List>
          <Link
            key={repository.owner.login}
            to={`/dashboard/${repository.owner.login}`}
          >
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        </List>
      ))}
    </>
  );
};

export default Repository;
