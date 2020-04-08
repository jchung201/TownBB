import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
  margin-bottom: 5rem;
  padding-top: 2em;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 8;
`;
export const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 8;
`;
export const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 8;
  height: 100%;
`;

export const GeneralInput = styled.input`
  padding: 1.4rem 2rem;
  font-size: 1.7rem;
  margin-top: 1rem;
  margin-left: 2em;
  margin-right: 2em;
`;

export const CategoryInput = styled.select`
  padding: 1.4rem 2rem;
  font-size: 1.7rem;
  margin-top: 1rem;
  margin-left: 2em;
  margin-right: 2em;
`;

export const ImageInputContainer = styled.div`
  font-size: 1.7rem;
  margin-top: 1rem;
  margin-left: 2em;
  margin-right: 2em;
`;
export const ImageInput = styled.input`
  padding: 1.4rem 2rem;
  font-size: 1.7rem;
`;
export const ImageLabel = styled.div`
  padding: 1.4rem 2rem;
  font-size: 1.7rem;
`;
export const ImageRender = styled.img`
  padding: 1.4rem 2rem;
  font-size: 1.7rem;
  height: 15rem;
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Headline = styled.input`
  padding: 1.4rem 2rem;
  font-size: 1.7rem;
  margin-top: 1rem;
  margin-left: 2em;
  margin-right: 2em;
`;
export const Description = styled.textarea`
  padding: 1.4rem 2rem;
  font-size: 1.7rem;
  margin-top: 1rem;
  margin-left: 2em;
  margin-right: 2em;
  height: 10rem;
`;
export const SubmitButton = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #49a59d;
  color: white;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  height: 7rem;
  width: 25rem;
  font-size: 3rem;
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
