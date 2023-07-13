import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 48px;
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
