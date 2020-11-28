import styled from 'styled-components';

export const List = styled.div`
  margin-top: 30px;
  max-width: 500px;

  a {
    background: #383838;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: tranform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50px;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #fff;
      }
    }

    svg {
      margin-left: auto;
      color: #fff;
    }
  }
`;
