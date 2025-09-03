import React, { useState , useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const C = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please agree to be contacted.');
      return;
    }

   
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactMethod: '',
      consent: false,
    });
  };

  useEffect(() => {
      Aos.init({
        duration: 1000, // animation duration
        once: false,     // whether animation should happen only once
      });
    }, []);

  return (
    <div className='.pc' data-aos = 'fade-up' data-aos-offset ='200px'>
    <div className="contact-section">
      <h1 className="main-heading">Contact Us</h1>
      <p className="contact-text">We’d love to hear from you! Fill out the form and we’ll get back to you shortly.</p>

      <div className="contact-content">
       
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.8076123208834!2d72.82413698850542!3d18.947483125510935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1f4a0e57c7%3A0x97c462e7d27b6a20!2sSona%20Chambers%2C%20Marine%20Lines%20East%2C%20Chira%20Bazaar%2C%20Kalbadevi%2C%20Mumbai%2C%20Maharashtra%20400002!5e0!3m2!1sen!2sin!4v1756753513452!5m2!1sen!2sin" 
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="radio-group">
              <p>Preferred Contact Method:</p>
              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="Email"
                  checked={formData.contactMethod === 'Email'}
                  onChange={handleChange}
                />
                Email
              </label>
              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="Phone"
                  checked={formData.contactMethod === 'Phone'}
                  onChange={handleChange}
                />
                Phone
              </label>
            </div>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              I agree to be contacted.
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default C;
