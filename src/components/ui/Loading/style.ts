import styled from "styled-components";

export const LoadingConatainer = styled.div`
  align-items: center;
  justify-content: center;
`
export const LoadingWrapper = styled.div`
  position: fixed;
  margin-top: calc(50vh - 70px);
  margin-left: calc(50vw - 40px);
  background:transparent;
  z-index: 999;
`
export const LoadingSpin = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  border: dashed 5px #D86145;
  opacity: 0.7;
  animation-name: spin;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from   { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`