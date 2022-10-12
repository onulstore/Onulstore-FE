import styled from 'styled-components';

export const FormBox = styled.div`
  display: flex;
  margin: 1rem;
  font-family: 'Pretendard';
  font-style: normal;
`;
export const UserName = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  letter-spacing: 0.005em;
  color: #ffffff;
  flex-grow: 1;
`;
export const Label = styled.label`
  width: 8rem;
  height: 1.7rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
  letter-spacing: 0.005em;
  color: #aaaaaa;
  /* color: ${({ theme }) => theme.palette.white}; */
`;

export const Content = styled.div`
  flex-grow: 1;
  width: 3.6rem;
  height: 1.7rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
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
  font-size: 1.2rem;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.023em;

  color: ${({ theme }) => theme.palette.whiteGrey};
`;
