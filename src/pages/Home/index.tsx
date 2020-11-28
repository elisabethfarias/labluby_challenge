import React, { useState, FormEvent } from 'react';

import logoImg from '../../assets/logo.png';

import { Form, Img, Container } from './styles';

const Home: React.FC = () => {
  const [newUser, setNewUser] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event?.preventDefault();

    window.location.href = `/dashboard/${newUser}`;
  }

  return (
    <>
      <Container>
        <Img src={logoImg} alt="Github Explorer" />
      </Container>

      <Form onSubmit={handleSubmit}>
        <input
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder="Usuário"
        />
        <button type="submit">ENTRAR</button>
      </Form>
    </>
  );
};

export default Home;
