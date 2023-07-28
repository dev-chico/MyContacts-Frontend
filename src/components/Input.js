import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  background-color: #FFF;
  border: 0;
  outline: 0;
  padding: 0px 16px;
  height: 52px;
  border-radius: 4px;
  font-size: 16px;
  border: 2px solid #FFF;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
