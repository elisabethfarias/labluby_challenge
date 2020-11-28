import React, { useEffect, useState } from 'react';
import { FiChevronsRight, FiGithub, FiHome } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';

import { useRouteMatch, Link } from 'react-router-dom';

import api from '../../services/api';

import { HeaderNav } from './styles';

interface UserParams {
  username: string;
}

interface User {
  login: string;
}

const Header: React.FC = () => {
  const [user, setUser] = useState<User>();

  const { params } = useRouteMatch<UserParams>();

  useEffect(() => {
    api.get(`users/${params.username}`).then(response => {
      setUser(response.data);
    });
  });

  return (
    <HeaderNav>
      <nav>
        <Link to={`/dashboard/${user?.login}`}>
          <FiHome size={20} />
          Dashbord
        </Link>

        <Link to={`/repository/${user?.login}`}>
          <FiGithub size={20} />
          Repository
        </Link>

        <Link to={`/followers/${user?.login}`}>
          <BsPeople size={20} />
          Seguidores
        </Link>

        <Link to={`/following/${user?.login}`}>
          <BsPeople size={20} />
          Seguindo
        </Link>

        <Link to="/">
          <FiChevronsRight size={16} />
          Sair
        </Link>
      </nav>
    </HeaderNav>
  );
};

export default Header;
