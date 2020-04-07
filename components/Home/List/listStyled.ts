import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostContainer = styled.div`
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
  width: 100%;
  font-size: 1.8rem;
  height: 15rem;
  margin-bottom: 2rem;
  &:first-child {
    margin-top: 2rem;
  }
`;
export const PostTitle = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;
export const PostDescription = styled.div`
  margin-top: 2rem;
  margin-left: 1rem;
`;
