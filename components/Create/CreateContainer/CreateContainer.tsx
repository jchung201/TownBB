import React, { Component } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { API_URL } from '../../../utilities/envUrl';
import notify from '../../../utilities/notify';
import {
  CATEGORY_NAMES,
  SUB_CATEGORY_NAMES,
} from '../../../utilities/categories';
import {
  Wrapper,
  Top,
  GeneralInput,
  CategoryInput,
  ImageInputContainer,
  ImageInput,
  ImageLabel,
  SubmitButton,
  Bottom,
  TopLeft,
  TopRight,
  ImageRender,
  Headline,
  Description,
} from './createContainerStyled';

class CreateContainer extends Component {
  state = {
    title: '',
    description: '',
    location: '',
    longitude: null,
    latitude: null,
    value: '',
    category: '',
    subcategory: '',
    images: [],
    contactEmail: '',
  };

  onLocationCheck = async () => {
    const { location } = this.state;
    try {
      const request = await axios.get(`${API_URL}/rest/common/location`, {
        params: {
          location,
        },
      });
      const {
        data: { longitude, latitude },
      } = request;
      this.setState({
        latitude,
        longitude,
        location,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        location: '',
      });
      notify('error', error.response.data.message);
    }
  };
  fileInputRef = React.createRef();
  onSelectFile = async e => {
    try {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      const res = await axios.post(
        `${API_URL}/rest/common/upload/image`,
        formData,
        config,
      );
      this.setState({ images: [res.data.Location] });
    } catch (error) {
      console.error(error);
      notify('error', error.response.data.message);
    }
  };

  onSubmit = async e => {
    e.preventDefault();
    const {
      title,
      description,
      location,
      longitude,
      latitude,
      value,
      category,
      subcategory,
      images,
      contactEmail,
    } = this.state;
    try {
      const request = await axios.post(`${API_URL}/rest/ads`, {
        title,
        description,
        location,
        longitude,
        latitude,
        value,
        categories: [category, subcategory],
        images,
        contactEmail,
      });
      notify('success', 'Post Created!');
      Router.push('/posts/[pid]', `/posts/${request.data.id}`);
    } catch (error) {
      notify('error', error.response.data.message);
      console.error(error);
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      title,
      description,
      location,
      value,
      category,
      images,
      contactEmail,
    } = this.state;
    return (
      <Wrapper
        onSubmit={this.onSubmit}
        onKeyPress={e => {
          e.key === 'Enter' && this.onSubmit(e);
        }}
      >
        <Top>
          <TopLeft>
            <GeneralInput
              type="text"
              placeholder="Title"
              required=""
              onChange={this.onChange}
              value={title}
              name="title"
            />
            <GeneralInput
              type="text"
              placeholder="Location"
              required=""
              onChange={this.onChange}
              value={location}
              name="location"
              onBlur={this.onLocationCheck}
            />
            <CategoryInput name="category" onChange={this.onChange}>
              <option value="">Choose a Category</option>
              {CATEGORY_NAMES.map(category => {
                return (
                  <option key={category.name} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </CategoryInput>
            {category.length > 0 && (
              <CategoryInput name="subcategory" onChange={this.onChange}>
                <option value="">Choose a Sub Category</option>
                {SUB_CATEGORY_NAMES[category].map(category => {
                  return (
                    <option key={category.name} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </CategoryInput>
            )}
            <GeneralInput
              type="text"
              placeholder="Contact Email (Anonymous)"
              required=""
              onChange={this.onChange}
              value={contactEmail}
              name="contactEmail"
            />
          </TopLeft>
          <TopRight>
            <ImageInputContainer>
              <ImageLabel>Upload a image</ImageLabel>
              <ImageInput
                onChange={this.onSelectFile}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                name="images"
              />
            </ImageInputContainer>
            {images.length > 0 && (
              <ImageRender src={images[0]} alt="Image Render" />
            )}
          </TopRight>
        </Top>
        <Bottom>
          <Headline
            type="text"
            placeholder="Headline"
            required=""
            onChange={this.onChange}
            value={value}
            name="value"
          />
          <Description
            type="text"
            placeholder="Description"
            required=""
            onChange={this.onChange}
            value={description}
            name="description"
          />
          <SubmitButton onClick={this.onSubmit}>Create Posting!</SubmitButton>
        </Bottom>
      </Wrapper>
    );
  }
}
export default CreateContainer;
