import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
}

export const PurchaseBtnContainer = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3.4rem 10.6rem;
  box-sizing: border-box;
  outline: none;
  border: none;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  font-weight: 600;
  font-size: 1.7rem;
  line-height: 2.4rem;

  background-color: #000;
  color: #fff;
`;
