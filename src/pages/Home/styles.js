import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
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
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

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

export const ListHeader = styled.header`
  margin-top: 24px;
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

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.2s ease-in;
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

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  .details {
    display: flex;
    flex-direction: column;
    gap: 16px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 32px;

  display: flex;
  align-items: start;
  gap: 24px;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-word;
  }
`;
