import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Snackbar, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useForm } from 'react-hook-form';
// const axios = require('axios').default;

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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

  const onSubmit = (data) => {
    // console.log(data);

    fetch('https://frozen-retreat-32896.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.messageId) {
          reset();
          setSuccess(true);
          setOpen(true);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setSuccess(false);
      });
  };
  return (
    <div className="contact-form-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ textAlign: 'center' }}>
          <TextField
            label="Full Name"
            variant="filled"
            type="text"
            required
            sx={{
              backgroundColor: '#eee',
              width: '80%',
              m: 1,
              borderRadius: '5px',
            }}
            {...register('name')}
          />
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            sx={{
              backgroundColor: '#eee',
              width: '80%',
              m: 1,
              borderRadius: '5px',
            }}
            {...register('email')}
          />
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <TextField
            label="Subject"
            variant="filled"
            type="text"
            sx={{
              backgroundColor: '#eee',
              width: '80%',
              m: 1,
              borderRadius: '5px',
            }}
            {...register('subject')}
          />
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <TextField
            label="Message"
            type="text"
            required
            multiline
            rows={4}
            variant="filled"
            sx={{
              backgroundColor: '#eee',
              m: 1,
              width: '80%',
              borderRadius: '5px',
            }}
            {...register('message')}
          />
        </Box>
        <Box sx={{ textAlign: 'justify' }}>
          <Button variant="contained" type="submit" sx={{ ml: 5.5, my: 1 }}>
            Contained
          </Button>
        </Box>
        {success && (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Message sent successfully"
            action={action}
          />
        )}
      </form>
    </div>
  );
};

export default ContactForm;
