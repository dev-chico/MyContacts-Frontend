import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    border-radius: 24px;
    outline: 0;
    border: 0;
    height: 50px;
    padding: 0px 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 16px;
    .sort-button {
      background-color: transparent;
      border: none;
      outline: 0;
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Card = styled.div`
  background-color: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;

      small {
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 5px;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background-color: transparent;
      border: none;
    }
  }
`;
