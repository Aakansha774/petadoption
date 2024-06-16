// src/components/ReportForm.jsx
import React, { useState } from 'react';

const ReportForm = ({ addCardData }) => {
  const [formData, setFormData] = useState({
    petDescription: '',
    location: '',
    dateFound: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }

    fetch('http://localhost:5000/report', {
      method: 'POST',
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        addCardData(data);
        setFormData({
          petDescription: '',
          location: '',
          dateFound: '',
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          image: null,
        });
      })
      .catch((error) => console.error('Error reporting pet:', error));
  };

  return (
    <div className="container mt-5">
      <h2>Report an Unadopted Pet</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="petDescription" className="form-label">Pet Description</label>
          <input
            type="text"
            className="form-control"
            id="petDescription"
            name="petDescription"
            value={formData.petDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location Found</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateFound" className="form-label">Date Found</label>
          <input
            type="date"
            className="form-control"
            id="dateFound"
            name="dateFound"
            value={formData.dateFound}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactName" className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactEmail" className="form-label">Your Email</label>
          <input
            type="email"
            className="form-control"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactPhone" className="form-label">Your Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ReportForm;
