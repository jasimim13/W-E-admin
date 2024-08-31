/* eslint-disable */

import { useState, useContext, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { EditorState, convertToRaw } from 'draft-js'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Iconify from 'src/components/iconify';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import MUIRichTextEditor from 'mui-rte'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { Component, PropTypes } from 'react';
import { posts } from 'src/_mock/blog';
import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import axiosInstance from 'src/api/axiosInstance';


import AuthContext from 'src/context/AuthContext';
import RichTextEditor from 'react-rte';

export default function BlogView() {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [heading, setHeading] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [severity, setSeverity] = useState('success');

  const [blogs, setBlogs] = useState([]);

  const { token } = useContext(AuthContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSnackBarClose = (event, reason) => {
    setSnackBarOpen(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);
    formData.append('heading', heading);
    formData.append('category', category);
    if (image) {
      formData.append('file', image);
    }

    // let data = {
    //   description: description,
    //   heading: heading,
    //   category: category,
    //   image: image
    // }

    try {
      // Send form data to the backend API
      const response = await axiosInstance.post('/blogs/createBlog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        handleClose();
        setSeverity('success');
        setSnackbarMessage('Blog added successfully!');
        setSnackBarOpen(true);
      }
    } catch (error) {
      console.error('Error adding blog:', error);
      setSeverity('error');
      setSnackbarMessage('Error adding blog. Please try again.');
      setSnackBarOpen(true);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogs/getAllBlogs');
        console.log(response);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.log("Error fetching blogs", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Blog</Typography>

        <Button
          variant="contained"
          color="inherit"
          onClick={handleOpen}
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Blog
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} borderRadius={3}>
            <Stack spacing={2} mt={2} width={800}>
              <TextField
                label="Heading"
                variant="outlined"
                value={heading}
                onChange={handleHeadingChange}
              />
              <TextField
                label="Category"
                variant="outlined"
                value={category}
                onChange={handleCategoryChange}
              />
              {/* <TextField
                label="Description"
                variant="outlined"
                multiline
                rows={5}
                value={description}
                onChange={handleDescriptionChange}
              /> */}
              <div className='mb-[100px] h-[300px]'>
                return <ReactQuill theme="snow" value={description} onChange={setDescription} />
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Button
                variant="contained"
                component="label"
                color="inherit"
                sx={{ width: '150px', alignSelf: 'center' }}
              >
                Upload Image
                <input type="file" hidden onChange={handleImageChange} />
              </Button>
              <Button
                variant="contained"
                color="inherit"
                sx={{ width: '150px', alignSelf: 'center' }}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        {/* <PostSearch posts={blogs} /> */}
        {/* <PostSort
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        /> */}
      </Stack>

      <Grid container spacing={3}>
        {blogs.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
      <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleSnackBarClose}>
        <Alert
          onClose={handleSnackBarClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
