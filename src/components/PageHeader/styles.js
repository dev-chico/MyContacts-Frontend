import styled from 'styled-components';

export const Container = styled.header`
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      transform: rotate(-90deg);
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      transition: 0.2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.light};
      }
    }
  }

  h1 {
    margin-top: 8px;
    font-size: 24px;
  }
`;
