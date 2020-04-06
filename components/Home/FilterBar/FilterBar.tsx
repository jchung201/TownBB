import React, { Component } from 'react';
import {
  getPosts,
  getLocation,
  getLocationAndPosts,
} from '../../../store/home/homeActions';
import { connect, ConnectedProps } from 'react-redux';
import {
  Wrapper,
  SearchInput,
  LocationInput,
  SubmitButton,
} from './filterBarStyled';

const mapStateToProps = ({
  home: { formattedAddress, latitude, longitude, category },
}) => ({
  formattedAddress,
  latitude,
  longitude,
  category,
});

const mapDispatchToProps = {
  getPosts,
  getLocation,
  getLocationAndPosts,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnState {
  search: string;
  location: string;
}

class FilterBar extends Component<PropsFromRedux, OwnState> {
  state = {
    search: '',
    location: '',
  };
  componentDidMount() {
    const { formattedAddress } = this.props;
    if (formattedAddress) this.setState({ location: formattedAddress });
  }
  onSubmit = async e => {
    e.preventDefault();
    const {
      getPosts,
      longitude,
      latitude,
      category,
      getLocationAndPosts,
    } = this.props;
    const { location, search } = this.state;
    // if location ... get location and then fetch
    if (location && (!longitude || !latitude)) {
      getLocationAndPosts({ location, search, category });
    } else {
      getPosts({ search, longitude, latitude, category });
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
      <Wrapper
        onKeyPress={e => {
          e.key === 'Enter' && this.onSubmit(e);
        }}
        onSubmit={this.onSubmit}
      >
        <SearchInput
          type="text"
          placeholder="Search"
          required=""
          onChange={this.onSearchChange}
        />
        <LocationInput
          type="text"
          placeholder="Location"
          onChange={this.onLocationChange}
        />
        <SubmitButton onClick={this.onSubmit}>Search</SubmitButton>
      </Wrapper>
    );
  }
}

export default connector(FilterBar);
