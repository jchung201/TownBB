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
  top: 17.5rem;
  font-size: 2rem;
  color: #49a59d;
  margin-top: 1rem;
`;
export const Back = styled.span`
  font-size: 1.7rem;
  color: #2a615d;
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
