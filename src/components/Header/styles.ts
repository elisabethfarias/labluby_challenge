import styled from 'styled-components';

export const HeaderNav = styled.header`
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 10px;
    padding: 10px;

    a {
      text-decoration: none;
      color: #d03434;
      list-style: none;
      color: #000000;
      display: block;

      svg {
        display: block;
        margin-bottom: 4px;
      }
    }
  }

  @media (max-width: 800px) {
    nav {
      width: 18em;
    }
    a {
      width: 18em;
    }
  }

  @media (max-width: 640px) {
    nav {
      width: 29em;
      font-size: 12px;
      margin-left: 5px;
    }
    a {
      width: 2em;
    }
  }
`;
