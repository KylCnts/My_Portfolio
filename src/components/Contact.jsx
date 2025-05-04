import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="about-text">
        <h1>For more inquiries, contact me!</h1>
        <div className="contact-options">

          <a href="https://www.facebook.com/Cntskyl" target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fab fa-facebook-f"></i>
            <p><strong>Facebook:</strong> Kyla Mae </p>
          </a>

          <a href="https://www.instagram.com/kyl_cnts?igsh=MXR1dXljdmk3amlmZw==" target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fab fa-instagram"></i>
            <p><strong>Instagram:</strong> kyl_cnts</p>
          </a>

          <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fab fa-x-twitter"></i>
            <p><strong>X (Twitter):</strong> @Cnts_kyl</p>
          </a>

          <a href="https://www.tiktok.com/@kyl_rnd?_t=ZS-8vyExeq7M3j&_r=1" target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fab fa-tiktok"></i>
            <p><strong>TikTok:</strong> @kyl_rnd</p>
          </a>

          <a href="tel:+639123456789" className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <p><strong>Phone:</strong> +63 912 345 6789</p>
          </a>

          <a href="mailto: kylacantos@gmail.com" className="contact-item">
            <i className="fas fa-envelope"></i>
            <p><strong>Email:</strong> kylacantos@gmail.com</p>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
