import styled from 'styled-components';

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

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
