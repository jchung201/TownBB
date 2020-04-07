import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-contente: center;
  flex-grow: 8;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const SearchInput = styled.input`
  width: 50%;
  padding: 1.4rem 2rem;
  font-size: 1.7rem;
`;
export const LocationInput = styled.input`
  width: 50%;
  padding: 1.4rem 2rem;
  font-size: 1.7rem;
`;
export const SubmitButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 3;
  background-color: #49a59d;
  color: white;
  cursor: pointer;
  width: 80%;
  margin-left: 1rem;
  font-size: 1.7rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease 0s;
  &:hover {
    background: #2a615d;
    letter-spacing: 0.1rem;
    -webkit-box-shadow: 0rem 0.5rem 0.4rem -0.1rem rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0rem 0.5rem 0.4rem -0.1rem rgba(0, 0, 0, 0.57);
    box-shadow: 0.5rem 0.4rem -0.1rem rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;
