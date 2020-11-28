import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    margin-bottom: 10px;
    height: 50px;
    border: 0;
    border-radius: 10px;
    border: 0;
    padding: 0 24px;
    color: #797979;
    text-align: left;
    font-weight: bold;
    width: 30em;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    height: 50px;
    width: 30em;
    background: #ffce00;
    border-radius: 10px;
    border: 0;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ffce00')};
    }
  }

  @media (max-width: 800px) {
    input {
      width: 18em;
    }
    button {
      width: 18em;
    }
  }
`;

export const Img = styled.img`
  width: 130px;
`;
