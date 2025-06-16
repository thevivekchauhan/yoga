import './App.css';
import React, { useState } from 'react';
import logo from './assets/gov-m-logo.png';
import titleImg from './assets/text-img.png';
import bannerImg from './assets/gujrat-yoga-section-img-two.png';
import indiaEmblem from './assets/gov-logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [fileNames, setFileNames] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [venue, setVenue] = useState('');
  const [participants, setParticipants] = useState('');
  const [chiefGuests, setChiefGuests] = useState(['', '', '']);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setFileNames(Array.from(e.target.files).map(f => f.name));
  };

  const handleChiefGuestChange = (idx, value) => {
    setChiefGuests(prev => {
      const updated = [...prev];
      updated[idx] = value;
      return updated;
    });
  };

  // Generate array of numbers from 1 to 50 for Ward options
  const wardOptions = Array.from({ length: 50 }, (_, i) => i + 1);

  const validate = () => {
    const newErrors = {};
    if (!selectedDistrict) newErrors.district = 'District is required.';
    if (!selectedCity) newErrors.city = 'City/Taluka is required.';
    if (!venue) newErrors.venue = 'Venue is required.';
    if (!selectedDepartment) newErrors.department = 'Department Name is required.';
    if (!participants) newErrors.participants = 'Number of participants is required.';
    if (fileNames.length === 0) newErrors.photos = 'At least one photo is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit logic here (e.g., send to backend)
      alert('Form submitted successfully!');
    } else {
      // Optionally scroll to first error
      const firstErrorField = document.querySelector('.is-invalid');
      if (firstErrorField) firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="yoga-app">
      {/* Header Section */}
      <header className="yoga-header">
        <div className="yoga-header-top">
          <img src={logo} alt="Gujarat State Yoga Board Logo" className="yoga-logo" />
          <img src={titleImg} alt="Gujarat State Yoga Board Title" className="yoga-title-img" />
          <img src={indiaEmblem} alt="India Emblem" className="yoga-india-emblem" />
        </div>
        <div className="yoga-header-banner">
          <img src={bannerImg} alt="Yoga Day Banner" className="yoga-day-banner" />
        </div>
      </header>

      {/* Orange Bar */}
      <div className="yoga-orange-bar">
        <span>IDY Reporting</span>
        <span className="yoga-orange-bar-sub">૨૧ જૂન, આંતરરાષ્ટ્રીય યોગ દિવસ-૨૦૨૪ અંતર્ગત યોજાયેલ કાર્યક્રમનું રિપોર્ટિંગ</span>
      </div>

      {/* Form Section */}
      <form className="yoga-form" onSubmit={handleSubmit} noValidate>
        <div className="yoga-form-row">
          <div className="yoga-form-group">
            <label>District (જિલ્લો)*</label>
            <select 
              value={selectedDistrict} 
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className={`yoga-select form-control${errors.district ? ' is-invalid' : ''}`}
            >
              <option value="">Please Select District</option>
            </select>
            {errors.district && <div className="invalid-feedback">{errors.district}</div>}
          </div>
          <div className="yoga-form-group">
            <label>City/Taluka (શહેર/તાલુકો)*</label>
            <select 
              value={selectedCity} 
              onChange={(e) => setSelectedCity(e.target.value)}
              className={`yoga-select form-control${errors.city ? ' is-invalid' : ''}`}
            >
              <option value="">Please Select City/Taluka</option>
            </select>
            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
          </div>
        </div>
        <div className="yoga-form-row">
          <div className="yoga-form-group">
            <label>Ward (વોર્ડ)</label>
            <select 
              value={selectedWard} 
              onChange={(e) => setSelectedWard(e.target.value)}
              className="yoga-select form-control"
            >
              <option value="">Please Select Ward</option>
              {wardOptions.map((ward) => (
                <option key={ward} value={ward}>
                  {ward}
                </option>
              ))}
            </select>
          </div>
          <div className="yoga-form-group">
            <label>Venue of the event (કાર્યક્રમનું સ્થળ)*</label>
            <input 
              type="text" 
              placeholder="Venue of the event (કાર્યક્રમનું સ્થળ)" 
              value={venue}
              onChange={e => setVenue(e.target.value)}
              className={`form-control${errors.venue ? ' is-invalid' : ''}`}
            />
            {errors.venue && <div className="invalid-feedback">{errors.venue}</div>}
          </div>
        </div>
        <div className="yoga-form-row">
          <div className="yoga-form-group">
            <label>Department Name (વિભાગનું નામ)</label>
            <select 
              value={selectedDepartment} 
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className={`yoga-select form-control${errors.department ? ' is-invalid' : ''}`}
            >
              <option value="">Please Select Department</option>
              <option value="UNI">UNI</option>
              <option value="OTHER">OTHER</option>
            </select>
            {errors.department && <div className="invalid-feedback">{errors.department}</div>}
          </div>
          <div className="yoga-form-group">
            <label>Number of participants (કાર્યક્રમમાં હાજર રહેલા લોકોની સંખ્યા)</label>
            <input 
              type="number" 
              placeholder="Number of participants (કાર્યક્રમમાં હાજર રહેલા લોકોની સંખ્યા)" 
              value={participants}
              onChange={e => setParticipants(e.target.value)}
              className={`form-control${errors.participants ? ' is-invalid' : ''}`}
            />
            {errors.participants && <div className="invalid-feedback">{errors.participants}</div>}
          </div>
        </div>
        <div className="yoga-form-row">
          <div className="yoga-form-group">
            <label htmlFor="yoga-file-input" className="form-label">
              Photos (કાર્યક્રમની તસવીર અપલોડ કરો)*
            </label>
            <input
              id="yoga-file-input"
              className={`form-control${errors.photos ? ' is-invalid' : ''}`}
              type="file"
              multiple
              onChange={handleFileChange}
            />
            <div className="form-text yoga-file-names" style={{ minHeight: 24 }}>
              {fileNames.length > 0 ? fileNames.join(', ') : 'No file chosen'}
            </div>
            {errors.photos && <div className="invalid-feedback">{errors.photos}</div>}
          </div><br></br>
          <div className="yoga-form-group">
            <label>Name of the Chief Guest present in the programme (કાર્યક્રમમાં ઉપસ્થિત મુખ્ય મહેમાનનું નામ)</label>
            {chiefGuests.map((guest, idx) => (
              <input
                key={idx}
                type="text"
                placeholder="Name of the Chief Guest present in the programme (કાર્યક્રમમાં ઉપસ્થિત મુખ્ય મહેમાનનું નામ)"
                value={guest}
                onChange={e => handleChiefGuestChange(idx, e.target.value)}
                className="form-control"
                style={{ marginBottom: 6 }}
              />
            ))}
          </div>
        </div>
        <div className="yoga-form-submit">
          <button type="submit">ફોર્મ સબમિટ કરો/Submit Form</button>
        </div>
      </form>
    </div>
  );
}

export default App;
