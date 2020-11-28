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

    div {
      margin-left: 16px;

      strong {
        font-size: 16px;
        color: #fff;
      }

      p {
        color: #fff;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
      color: #fff;
    }
  }

  @media (max-width: 640px) {
    a {
      width: 23em;
      div {
        strong {
          font-size: 0.7rem;
        }
        p {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
