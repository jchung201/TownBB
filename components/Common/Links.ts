import styled from 'styled-components';

export const LinkA = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

export const LinkB = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
