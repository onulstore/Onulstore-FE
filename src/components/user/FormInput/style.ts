import styled from 'styled-components';

interface Props {
  width: number | undefined;
  height?: number | undefined;
  errorMsg?: string | boolean | undefined;
}

export const Container = styled.div`
  font-family: 'Pretendard Variable';
  width: ${({ width }: Props) => (width ? width + 'rem' : '31.1rem')};
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
export const Wapper = styled.div`
  display: flex;
`;
export const Label = styled.label`
  height: 1.4rem;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 0.005em;
  color: #2f2f33;
  display: inline-block;
  margin-bottom: 0.4rem;
`;
export const Description = styled.div`
  flex-grow: 1;
  height: 1.4rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: right;
  letter-spacing: 0.005em;
  color: #424242;
`;
export const ErrorMsg = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 0.005em;
  color: #d86145;
  margin-top: 0.8rem;
`;
export const Input = styled.input<Props>`
  font-family: 'PretendardRegular';
  font-size: 1.5rem;
  width: ${({ width }) => (width ? width + 'rem' : '31.1rem')};
  height: ${({ height }) => (height ? height + 'rem' : '4rem')};
  border: ${({ errorMsg }) => (errorMsg ? '1px solid #D86145' : '1px solid #cfcfcf')};
  background-color: ${({ errorMsg }) => errorMsg && 'rgba(216, 97, 69, 0.04)'};

  position: relative;

  &::placeholder {
    position: absolute;
    width: 11.2rem;
    height: 1.8rem;
    left: 1.7rem;
    top: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.005em;
    color: #505050;
  }
`;
