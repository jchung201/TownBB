import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`;

export const CategoryLabel = styled.div`
  position: absolute;
  top: 5em;
  font-size: 1.5em;
  color: #3f51b5;
`;
export const Back = styled.span`
  font-size: 1.3rem;
  color: #3f51b5;
  text-decoration: underline;
  cursor: pointer;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 2rem;
  margin-right: 2rem;
`;
export const SideBar = styled.div`
  width: 25rem;
`;
