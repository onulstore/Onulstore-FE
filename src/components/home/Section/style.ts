import styled from 'styled-components';

export const SectionTile = styled.h1<{ fontSize: number }>`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize || 2.4}rem;
  & svg {
    margin: 0 1.1rem;
  }
`;

export const Section = styled.section`
  margin: 2rem;
`;
