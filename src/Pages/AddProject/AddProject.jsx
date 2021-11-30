import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, CircularProgress, Input, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddProject.css';

const AddProject = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  //
  const onSubmit = (data) => {
    setLoading(true);
    // console.log(data);
    const { projectName, img, clientLink, serverLink, technologies, liveLink } =
      data;
    const image = img[0];
    // console.log(image);

    const formData = new FormData();

    formData.append('projectName', projectName);
    formData.append('img', image);
    formData.append('clientLink', clientLink);
    formData.append('serverLink', serverLink);
    formData.append('technologies', technologies);
    formData.append('liveLink', liveLink);

    fetch('https://frozen-retreat-32896.herokuapp.com/project', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          reset();
          setSuccess(true);
          setLoading(false);
          setOpen(true);
        }
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  };

  //

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="addservice">
      <h1>Add Project</h1>

      {success && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="project submit successfully"
          action={action}
          sx={{ color: 'white' }}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
            id="filled-basic"
            type="text"
            label="Project Name"
            variant="filled"
            sx={{ backgroundColor: 'blanchedalmond', width: '300px', my: 1 }}
            {...register('projectName')}
          />
        </Box>
        <Box>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              sx={{
                backgroundColor: 'blanchedalmond',
                width: '300px',
                my: 1,
                py: 1,
                px: 1,
              }}
              {...register('img')}
            />
          </label>
        </Box>
        <Box>
          <TextField
            type="url"
            label="Client Side Link"
            variant="filled"
            sx={{ backgroundColor: 'blanchedalmond', width: '300px', my: 1 }}
            {...register('clientLink')}
          />
        </Box>
        <Box>
          <TextField
            type="url"
            label="Server Side Link"
            variant="filled"
            sx={{ backgroundColor: 'blanchedalmond', width: '300px', my: 1 }}
            {...register('serverLink')}
          />
        </Box>
        <Box>
          <TextField
            type="text"
            label="Technologies"
            variant="filled"
            placeholder="use comma after every tech name"
            sx={{ backgroundColor: 'blanchedalmond', width: '300px', my: 1 }}
            {...register('technologies')}
          />
        </Box>
        <Box>
          <TextField
            type="url"
            label="Live Preview"
            variant="filled"
            sx={{ backgroundColor: 'blanchedalmond', width: '300px', my: 1 }}
            {...register('liveLink')}
          />
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        )}
      </form>
    </div>
  );
};

export default AddProject;
