import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header/index';

import {
  Container,
  UserImage,
  UserInfo,
  UserDescription,
  UserBio,
} from './styles';

interface UserParams {
  username: string;
}

interface User {
  login: string;
  avatar_url: string;
  email: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
}

const Repository: React.FC = () => {
  const [user, setUser] = useState<User>();

  const { params } = useRouteMatch<UserParams>();

  useEffect(() => {
    api.get(`users/${params.username}`).then(response => {
      setUser(response.data);
    });
  });

  return (
    <>
      <Header />

      <Container>
        <UserImage src={user?.avatar_url} alt={user?.login} />
        <UserInfo>
          <h1>{user?.login}</h1>
          <p>{user?.email}</p>
          <p>{user?.location}</p>
        </UserInfo>
      </Container>

      <UserDescription>
        <ul>
          <li>
            <strong>{user?.followers}</strong>
            <span>Seguidores</span>
          </li>

          <li>
            <strong>{user?.following}</strong>
            <span>Seguindo</span>
          </li>

          <li>
            <strong>{user?.public_repos}</strong>
            <span>Repos</span>
          </li>
        </ul>
      </UserDescription>

      <UserBio>
        <h1>{user?.bio}</h1>
      </UserBio>
    </>
  );
};

export default Repository;
