import styled from 'styled-components';

interface Props {
  width: number | undefined;
  height?: number | undefined;
  errorMsg?: string | boolean | undefined;
}

export const Container = styled.div`
  width: ${({ width }: Props) => (width ? width + 'rem' : '5rem')};
  display: flex;
  flex-direction: column;
  margin: 3.2rem;
  font-family: 'Pretendard Variable';
  /* border: 1px solid red; */
`;
export const Wapper = styled.div`
  display: flex;
`;
export const Label = styled.label`
  height: 1.4rem;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.005em;
  color: #2f2f33;
`;
export const Description = styled.div`
  flex-grow: 1;
  height: 14px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.005em;
  color: #424242;
`;
export const ErrorMsg = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.005em;
  color: #d86145;
`;
export const Input = styled.input<Props>`
  font-family: 'PretendardRegular';
  width: ${({ width }) => (width ? width + 'rem' : '5rem')};
  height: ${({ height }) => (height ? height + 'rem' : '5rem')};
  border-radius: 0.5rem;
  border: ${({ errorMsg }) => (errorMsg ? '1px solid #D86145' : '1px solid #cfcfcf')};
  background-color: ${({ errorMsg }) => errorMsg && 'rgba(216, 97, 69, 0.04)'};

  margin-top: 0.4rem;
  margin-bottom: 0.8rem;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.005em;

    color: #505050;
  }
`;
