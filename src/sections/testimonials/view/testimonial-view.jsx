/* eslint-disable */
import Iconify from 'src/components/iconify';
import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import { useState, useContext, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

import { posts } from 'src/_mock/blog';
import axiosInstance from 'src/api/axiosInstance';


import AuthContext from 'src/context/AuthContext';

// ----------------------------------------------------------------------

export default function TestimonialView() {
  const [open, setOpen] = useState(false);

  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');

  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [severity, setSeverity] = useState('success');

  const [testimonials, setTestimonials] = useState([]);

  const { token } = useContext(AuthContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
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
    formData.append('name', name);
    formData.append('description', description);
    formData.append('location', location);
    if (image) {
      formData.append('file', image);
    }

    try {
      // Send form data to the backend API
      const response = await axiosInstance.post('/testimonial/add-testimonial', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        handleClose();
        setSeverity('success');
        setSnackbarMessage('Testimonial added successfully!');
        setSnackBarOpen(true);
        const newTestimonial = response.data.testimonial;
        setTestimonials((prev) => [...prev, newTestimonial]);

      }
    } catch (error) {
      console.error('Error adding Testimonial:', error);
      setSeverity('error');
      setSnackbarMessage('Error adding Testimonial. Please try again.');
      setSnackBarOpen(true);
    }
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axiosInstance.get('/testimonial/get-all-testimonials');
        console.log(response.data.testimonials);
        setTestimonials(response.data.testimonials);
      } catch (error) {
        console.log("Error fetching testimonials", error);
      }
    };

    fetchTestimonials();
  }, []);


  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Testmonials</Typography>

        <Button
          variant="contained"
          color="inherit"
          onClick={handleOpen}
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Testimonial
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} borderRadius={3}>
            <Stack spacing={2} mt={2} width={800}>
              <TextField id="outlined-basic" label="Heading" variant="outlined" />
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
              />
              <TextField
                label="Description"
                variant="outlined"
                value={description}
                onChange={handleDescriptionChange}
              />
              <TextField
                label="Location"
                variant="outlined"
                value={location}
                onChange={handleLocationChange}
              />
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

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between"></Stack>

      <Grid container spacing={3}>
        {testimonials.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
