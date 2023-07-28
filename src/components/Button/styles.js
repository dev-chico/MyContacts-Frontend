import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;
  padding: 0px 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #FFF;
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
  transition: all 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover {
    background-color: ${theme.colors.danger.light};
  }

  &:active {
    background-color: ${theme.colors.danger.dark};
  }
  `}

  &:disabled {
    background-color: #CCC !important;
    cursor: not-allowed !important;
  }
`;
