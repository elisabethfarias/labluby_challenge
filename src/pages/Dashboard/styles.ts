import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UserImage = styled.img`
  margin-top: 60px;
  width: 130px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  color: #fff;
`;

export const UserDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 40px;
    background: #383838;
    color: #fff;
    width: 540px;
    padding: 10px;
    border-radius: 10px;

    li {
      & + li {
        margin-left: 100px;
      }
      strong {
        display: block;
        font-size: 30px;
      }

      span {
        display: block;
        margin-top: 4px;
      }
    }
  }

  @media (max-width: 800px) {
    ul {
      padding: 40px;
      width: 20em;
    }
    li {
      width: 1em;
    }
    strong {
      width: 1em;
      font-size: 16px;
    }
  }
`;

export const UserBio = styled.div`
  color: #fff;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 10px;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
      padding-left: 0.7em;
      padding-right: 0.7em;
      text-align: center;
    }
  }
`;
