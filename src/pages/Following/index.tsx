import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header/index';

import { List } from './styles';

interface UserParams {
  username: string;
}

interface User {
  login: string;
  avatar_url: string;
}

const Following: React.FC = () => {
  const [followings, setFollowings] = useState<User[]>([]);

  const { params } = useRouteMatch<UserParams>();

  useEffect(() => {
    api.get(`users/${params.username}/following`).then(response => {
      setFollowings(response.data);
    });
  });

  return (
    <>
      <Header />
      {followings.map(user => (
        <List>
          <Link key={user.login} to={`/dashboard/${user.login}`}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>#{user.login}</strong>
            </div>

            <FiChevronRight size={20} />
          </Link>
        </List>
      ))}
    </>
  );
};

export default Following;
