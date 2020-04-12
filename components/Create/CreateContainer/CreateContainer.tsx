import React, { Component } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { API_URL } from '../../../utilities/envUrl';
import notify from '../../../utilities/notify';
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import {
  CATEGORY_NAMES,
  SUB_CATEGORY_NAMES,
} from '../../../utilities/categories';
import { Wrapper, Description, ImageRender } from './createContainerStyled';

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
    company: '',
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
        categories: [category && category, subcategory && subcategory],
        images,
        contactEmail,
      });
      notify('success', 'Post Created!');
      Router.push('/posts/[pid]', `/posts/${request.data.id}`);
    } catch (error) {
      notify('error', 'Missing fields!');
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
      company,
    } = this.state;
    return (
      <Wrapper onSubmit={this.onSubmit}>
        <Typography variant="h6" gutterBottom>
          Create a Post
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Title"
              name="title"
              value={title}
              onChange={this.onChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Location"
              name="location"
              value={location}
              fullWidth
              onChange={this.onChange}
              onBlur={this.onLocationCheck}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="category"
                onChange={this.onChange}
              >
                {CATEGORY_NAMES.map(category => {
                  return (
                    <MenuItem key={category.name} value={category.id}>
                      {category.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            {category.length > 0 && (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Sub-Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  name="subcategory"
                  onChange={this.onChange}
                >
                  {SUB_CATEGORY_NAMES[category].map(category => {
                    return (
                      <MenuItem key={category.name} value={category.id}>
                        {category.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Company"
              name="company"
              value={company}
              onChange={this.onChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Contact Email"
              name="contactEmail"
              value={contactEmail}
              onChange={this.onChange}
              fullWidth
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            justify="center"
            alignItems="center"
            direction="column"
            style={{ marginTop: '2em' }}
          >
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.onSelectFile}
              name="images"
              style={{ display: 'none' }}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload Pictures
              </Button>
            </label>
            {images.length > 0 && (
              <ImageRender src={images[0]} alt="Image Render" />
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="value"
              label="Headline"
              onChange={this.onChange}
              value={value}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Description
              type="text"
              placeholder="Description"
              required=""
              onChange={this.onChange}
              value={description}
              name="description"
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Button
              type="submit"
              variant="contained"
              onClick={this.onSubmit}
              color="primary"
              size="large"
              style={{
                marginBottom: '2em',
                width: '12em',
                maxWidth: '80%',
                fontSize: '2em',
              }}
            >
              Create Posting
            </Button>
          </Grid>
        </Grid>
      </Wrapper>
    );
  }
}
export default CreateContainer;
