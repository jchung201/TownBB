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
// const rawr = () => {
//   return (
//     <Wrapper>
//       <Top>
//         <TopLeft>
//           <GeneralInput
//             type="text"
//             placeholder="Title"
//             required=""
//             onChange={this.onChange}
//             value={title}
//             name="title"
//           />
//           <GeneralInput
//             type="text"
//             placeholder="Location"
//             required=""
//             onChange={this.onChange}
//             value={location}
//             name="location"
//             onBlur={this.onLocationCheck}
//           />
//           <CategoryInput name="category" onChange={this.onChange}>
//             <option value="">Choose a Category</option>
//             {CATEGORY_NAMES.map(category => {
//               return (
//                 <option key={category.name} value={category.id}>
//                   {category.name}
//                 </option>
//               );
//             })}
//           </CategoryInput>
//           {category.length > 0 && (
//             <CategoryInput name="subcategory" onChange={this.onChange}>
//               <option value="">Choose a Sub Category</option>
//               {SUB_CATEGORY_NAMES[category].map(category => {
//                 return (
//                   <option key={category.name} value={category.id}>
//                     {category.name}
//                   </option>
//                 );
//               })}
//             </CategoryInput>
//           )}
//           <GeneralInput
//             type="text"
//             placeholder="Contact Email (Anonymous)"
//             required=""
//             onChange={this.onChange}
//             value={contactEmail}
//             name="contactEmail"
//           />
//         </TopLeft>
//         <TopRight>
//           <ImageInputContainer>
//             <ImageLabel>Upload a image</ImageLabel>
//             <ImageInput
//               onChange={this.onSelectFile}
//               type="file"
//               accept="image/png, image/jpeg, image/jpg"
//               name="images"
//             />
//           </ImageInputContainer>
//           {images.length > 0 && (
//             <ImageRender src={images[0]} alt="Image Render" />
//           )}
//         </TopRight>
//       </Top>
//       <Bottom>
//         <Headline
//           type="text"
//           placeholder="Headline"
//           required=""
//           onChange={this.onChange}
//           value={value}
//           name="value"
//         />

//         <SubmitButton type="submit" onClick={this.onSubmit}>
//           Create Posting!
//         </SubmitButton>
//       </Bottom>
//     </Wrapper>
//   );
// };
