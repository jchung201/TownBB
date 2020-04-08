import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utilities/envUrl';
import notify from '../../../utilities/notify';
import {
  Wrapper,
  Top,
  GeneralInput,
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
    categories: [],
    subCategories: [],
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
      categories,
      subCategories,
      images,
      contactEmail,
    } = this.state;
    try {
      const request = await axios.post(`${API_URL}/rest/common/location`, {
        title,
        description,
        location,
        longitude,
        latitude,
        value,
        categories: [...categories, ...subCategories],
        images,
        contactEmail,
      });
      notify('success', 'Post Created!');
      //notify success and refetch ads
      // also go to specific posting screen
    } catch (error) {
      console.error(error);
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  render() {
    const {
      title,
      description,
      location,
      value,
      categories,
      subCategories,
      images,
      contactEmail,
    } = this.state;
    return (
      <Wrapper>
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
            <GeneralInput
              type="text"
              placeholder="Category"
              required=""
              onChange={this.onChange}
              value={categories}
              name="categories"
            />

            <GeneralInput
              type="text"
              placeholder="Sub Categories"
              required=""
              onChange={this.onChange}
              value={subCategories}
              name="subCategories"
            />
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
          <SubmitButton>Create Posting!</SubmitButton>
        </Bottom>
      </Wrapper>
    );
  }
}
export default CreateContainer;
