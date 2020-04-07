import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.2rem solid #49a59d;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #49a59d;
  height: 4rem;
`;
export const Title = styled.div`
  color: white;
  font-size: 2rem;
`;

export const Main = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmailInput = styled.input`
  margin-top: 2rem;
  width: 60%;
  padding: 1.4rem 2rem;
  font-size: 1.7rem;
`;

export const Submit = styled.div`
  background-color: #49a59d;
  margin-top: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  color: white;
  width: 50%;
  font-size: 2.5rem;
  border-radius: 0.5rem;
  padding: 0.7rem; 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
