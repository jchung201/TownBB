import React, { Component } from 'react';
import { getPosts } from '../../../store/home/homeActions';
import { connect, ConnectedProps } from 'react-redux';
import {
  Wrapper,
  SearchInput,
  LocationInput,
  SubmitButton,
} from './filterBarStyled';
const mapDispatchToProps = {
  getPosts,
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnState {
  search: string;
  location: string;
  latitude: number | null;
  longitude: number | null;
}

class FilterBar extends Component<PropsFromRedux, OwnState> {
  state = {
    search: '',
    location: '',
    latitude: null,
    longitude: null,
  };
  onSubmit = async e => {
    e.preventDefault();
    const { getPosts } = this.props;
    const { location } = this.state;
    // if location ... get location and then fetch
    if (location !== '') {
      return;
    } else {
      getPosts({ search: 'keto' });
    }
  };

  render() {
    return (
      <Wrapper
        onKeyPress={e => {
          e.key === 'Enter' && this.onSubmit(e);
        }}
        onSubmit={this.onSubmit}
      >
        <SearchInput type="text" placeholder="Search" required="" />
        <LocationInput placeholder="Location" />
        <SubmitButton onClick={this.onSubmit}>Search</SubmitButton>
      </Wrapper>
    );
  }
}

export default connector(FilterBar);
