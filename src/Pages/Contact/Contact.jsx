import { Grid } from '@mui/material';
import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="main-heading">
        Get in <span className="name">touch</span>
      </h1>
      <div className="contact">
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <ContactInfo />
          </Grid>
          <Grid item sm={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Contact;
