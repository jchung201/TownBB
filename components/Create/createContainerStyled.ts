import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
  margin-bottom: 5rem;
  padding-top: 2em;
  padding-left: 2em;
  padding-right: 2em;
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
  max-width: 100%;
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
  padding: 0.7em 1em;
  font-size: 1.7em;
  margin-top: 1em;
  margin-bottom: 1em;
  height: 10em;
  width: 100%;
  font-family: 'Roboto', sans-serif;
`;
