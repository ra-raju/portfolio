import React from 'react';

const ContactInfo = () => {
  return (
    <div>
      <p>
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>

      <div className="contact-type">
        <div className="contact-body">
          <p className="contact-icon-container">
            <i className="fas fa-map-marked contact-icon"></i>
          </p>
          <p className="contact-info">
            <span className="contact-title"> Address point </span>
            <br /> <span className="contact-body">Chittagong, Bangladesh</span>
          </p>
        </div>
        <div className="contact-body">
          <p className="contact-icon-container">
            <i className="fas fa-envelope-open contact-icon"></i>
          </p>
          <p className="contact-info">
            <span className="contact-title"> mail me </span>
            <br />{' '}
            <span className="contact-body">
              <a href="mailto:robeyoulawal@gmail.com">robeyoulawal@gmail.com</a>
            </span>
          </p>
        </div>
        <div className="contact-body">
          <p className="contact-icon-container">
            <i className="fas fa-mobile-alt contact-icon"></i>
          </p>
          <p className="contact-info">
            <span className="contact-title"> call me </span>
            <br />{' '}
            <span className="contact-body">
              <a href="tel:+8801867100385">+8801867100385</a>
            </span>
          </p>
        </div>
      </div>

      <div className="another-contact">
        <a
          href="https://www.facebook.com/robeyoulawalraju1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook another-icon"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/robeyoulawalraju/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin another-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
