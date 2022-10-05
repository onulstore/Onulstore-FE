import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const Menu = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: #fff;
  overflow: auto;
  padding-bottom: 8rem;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: 0.3s;
`;
