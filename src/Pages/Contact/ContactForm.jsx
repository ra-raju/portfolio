import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
      </form>
    </div>
  );
};

export default ContactForm;
