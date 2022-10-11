import styled, { css } from 'styled-components';

export const FormBox = styled.div`
  display: flex;
  margin: 1rem;
  font-family: 'Pretendard';
  font-style: normal;
`;
export const UserName = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.005em;
  color: #ffffff;
  flex-grow: 1;
`;
export const Label = styled.label`
  width: 8rem;
  height: 17px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.005em;
  color: #aaaaaa;
  /* color: ${({ theme }) => theme.palette.white}; */
`;

export const Content = styled.div`
  flex-grow: 1;
  width: 36px;
  height: 17px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.005em;
  color: ${({ theme }) => theme.palette.main};
`;

export const Btn = styled.button<{ label: string | undefined }>`
  width: 9.6rem;
  height: 2.2rem;
  border: 1px solid ${({ theme }) => theme.palette.midGrey};
  /* ${({ label, theme }) => label && `border: 1px solid ${theme.palette.midGrey};`} */
  ${({ label }) => label && 'border: 1px solid #A9A9A9;'}
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.06);
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.023em;

  color: ${({ theme }) => theme.palette.whiteGrey};
`;
