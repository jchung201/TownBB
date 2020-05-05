import React, { Component } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { API_URL } from '../../utilities/envUrl';
import { toast } from 'react-toastify';
import {
  Grid,
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import { CATEGORY_NAMES, SUB_CATEGORY_NAMES } from '../../utilities/categories';
import { Wrapper, Description, ImageRender } from './createContainerStyled';
import validateCreate from './validateCreate';

interface OwnProps {
  foundPost?: any;
}

class CreateContainer extends Component<OwnProps | any> {
  state = {
    title: '',
    description: '',
    location: '',
    longitude: null,
    latitude: null,
    value: '',
    category: '',
    type: '',
    images: [],
    contactEmail: '',
    company: '',
    disabled: false,
  };
  componentDidMount() {
    const { foundPost } = this.props;
    if (foundPost) {
      const {
        title,
        description,
        location,
        longitude,
        latitude,
        value,
        category,
        type,
        images,
        contactEmail,
        company,
      } = foundPost;
      this.setState({
        title,
        description,
        location,
        longitude,
        latitude,
        value,
        category,
        type,
        images,
        contactEmail,
        company,
      });
    }
  }

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
      toast.error('Error saving location!');
    }
  };
  fileInputRef = React.createRef();
  onSelectFile = async (e) => {
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
      toast.error(error.response.data.message);
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ disabled: true });
    const { foundPost } = this.props;
    try {
      let request;
      if (foundPost) {
        request = await axios.patch(
          `${API_URL}/rest/ads/${foundPost.id}?hash=${foundPost.hash}`,
          validateCreate(this.state),
        );
        toast('Post Edited!');
      } else {
        request = await axios.post(
          `${API_URL}/rest/ads`,
          validateCreate(this.state),
        );
        toast('Post Created!');
      }
      Router.push('/posts/[pid]', `/posts/${request.data.id}`);
    } catch (error) {
      toast.error('Missing fields!');
      console.error(error);
      this.setState({ disabled: false });
    }
  };

  delete = async (e) => {
    e.preventDefault();
    this.setState({ disabled: true });
    const { foundPost } = this.props;
    try {
      if (foundPost) {
        await axios.delete(
          `${API_URL}/rest/ads/${foundPost.id}?hash=${foundPost.hash}`,
        );
        toast('Post Deleted!');
      } else {
        this.setState({ disabled: false });
        return toast.error('Cannot delete Post!');
      }
      Router.push('/');
    } catch (error) {
      this.setState({ disabled: false });
      toast.error('Issue deleting Post!');
    }
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      title,
      description,
      location,
      value,
      category,
      type,
      images,
      contactEmail,
      company,
      disabled,
    } = this.state;
    const { foundPost } = this.props;
    return (
      <Wrapper onSubmit={this.onSubmit}>
        <Typography variant="h6" gutterBottom>
          Create a Job Post
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Title (e.g. Experienced Chef Needed!)"
              name="title"
              value={title}
              onChange={this.onChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Location (e.g. City, Zip)"
              name="location"
              value={location}
              fullWidth
              onChange={this.onChange}
              onBlur={this.onLocationCheck}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Job Category
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                name="category"
                onChange={this.onChange}
                value={category}
              >
                {CATEGORY_NAMES.map((category) => {
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
                  Employment Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  name="type"
                  value={type}
                  onChange={this.onChange}
                >
                  {SUB_CATEGORY_NAMES[category].map((category) => {
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
              label="Company/Employer"
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
          <Grid item xs={12}>
            <TextField
              name="value"
              label="Wage (e.g. $20/Hour)"
              onChange={this.onChange}
              value={value}
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
              <Button
                variant="contained"
                color="primary"
                component="span"
                style={{ color: 'white' }}
              >
                Upload Pictures
              </Button>
            </label>
            {images.length > 0 && (
              <ImageRender src={images[0]} alt="Image Render" />
            )}
          </Grid>
          <Grid item xs={12}>
            <Description
              required
              type="text"
              placeholder="Description of Job"
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
              size="medium"
              style={{
                marginBottom: '2em',
                width: '12em',
                maxWidth: '80%',
                fontSize: '1.5em',
                color: 'white',
              }}
              disabled={disabled}
            >
              {foundPost ? 'Edit' : 'Create'} Job Post
            </Button>
            {foundPost && (
              <Button
                type="button"
                variant="contained"
                onClick={this.delete}
                size="medium"
                style={{
                  marginBottom: '2em',
                  width: '12em',
                  maxWidth: '80%',
                  fontSize: '1.5em',
                  color: 'white',
                  backgroundColor: 'red',
                }}
                disabled={disabled}
              >
                Delete Post
              </Button>
            )}
          </Grid>
        </Grid>
      </Wrapper>
    );
  }
}
export default CreateContainer;
