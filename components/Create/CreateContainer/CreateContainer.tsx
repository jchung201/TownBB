import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utilities/envUrl';
import {
  Wrapper,
  Main,
  SearchInput,
  LocationInput,
  SubmitButton,
} from './createContainerStyled';

interface OwnState {
  title: string;
  description: string;
  location: null;
  longitude: null;
  latitude: string;
  value: string;
  categories: string[];
  images: string[];
  company: string;
  contactEmail: string;
  contactPhone: string;
  contactWebsite: string;
}

class CreateContainer extends Component<null, OwnState> {
  state = {
    title: '',
    description: '',
    location: null,
    longitude: null,
    latitude: '',
    value: '',
    categories: [],
    images: [],
    company: '',
    contactEmail: '',
    contactPhone: '',
    contactWebsite: '',
  };

  onLocationCheck = async () => {
    const { location } = this.state;
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
      images,
      company,
      contactEmail,
      contactPhone,
      contactWebsite,
    } = this.state;
    try {
      const request = await axios.post(`${API_URL}/rest/common/location`, {
        title,
        description,
        location,
        longitude,
        latitude,
        value,
        categories,
        images,
        company,
        contactEmail,
        contactPhone,
        contactWebsite,
      });
      //notify success and refetch ads
      // also go to specific posting screen
    } catch (error) {
      console.error(error);
    }
  };

  onSearchChange = async e => {
    const {
      target: { value },
    } = e;
    this.setState({ search: value });
  };
  onLocationChange = async e => {
    const {
      target: { value },
    } = e;
    this.setState({ location: value });
  };

  render() {
    return (
      <Wrapper>
        <Main>
          <SearchInput type="text" placeholder="Title" required="" />
          <LocationInput type="text" placeholder="Description" required="" />
          <SubmitButton>Create Posting!</SubmitButton>
        </Main>
      </Wrapper>
    );
  }
}
export default CreateContainer;
