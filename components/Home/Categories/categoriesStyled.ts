import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.3rem solid #49a59d;
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

export const CategoryItem = styled.div`
  cursor: pointer;
  color: #49a59d;
  &:hover {
    background: #49a59d;
    color: white;
    letter-spacing: 0.1rem;
    -webkit-box-shadow: 0rem 0.5rem 0.4rem -0.1rem rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0rem 0.5rem 0.4rem -0.1rem rgba(0, 0, 0, 0.57);
    box-shadow: 0.5rem 0.4rem -0.1rem rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
  border-bottom: 0.2rem solid #49a59d;
  &:last-child {
    border: 0;
  }
`;

export const CategoryLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.8rem;
  height: 3rem;
`;
