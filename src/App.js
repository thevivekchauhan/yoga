import './App.css';
import React, { useState } from 'react';
import logo from './assets/gov-m-logo.png';
import titleImg from './assets/text-img.png';
import bannerImg from './assets/gujrat-yoga-section-img-two.png';
import indiaEmblem from './assets/gov-logo.jpg';

function App() {
  const [fileNames, setFileNames] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleFileChange = (e) => {
    setFileNames(Array.from(e.target.files).map(f => f.name));
  };

  // Generate array of numbers from 1 to 50 for Ward options
  const wardOptions = Array.from({ length: 50 }, (_, i) => i + 1);

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
      <form className="yoga-form">
        <div className="yoga-form-row">
          <div className="yoga-form-group">
            <label>District (જિલ્લો)*</label>
            <select 
              value={selectedDistrict} 
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="yoga-select"
            >
              <option value="">Please Select District</option>
            </select>
          </div>
          <div className="yoga-form-group">
            <label>City/Taluka (શહેર/તાલુકો)*</label>
            <select 
              value={selectedCity} 
              onChange={(e) => setSelectedCity(e.target.value)}
              className="yoga-select"
            >
              <option value="">Please Select City/Taluka</option>
            </select>
          </div>
        </div>
        <div className="yoga-form-row">
          <div className="yoga-form-group">
            <label>Ward (વોર્ડ)</label>
            <select 
              value={selectedWard} 
              onChange={(e) => setSelectedWard(e.target.value)}
              className="yoga-select"
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
            <input type="text" placeholder="Venue of the event (કાર્યક્રમનું સ્થળ)" />
          </div>
        </div>
        <div className="yoga-form-row">
          <div className="yoga-form-group">
            <label>Department Name (વિભાગનું નામ)</label>
            <select 
              value={selectedDepartment} 
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="yoga-select"
            >
              <option value="">Please Select Department</option>
              <option value="UNI">UNI</option>
              <option value="OTHER">OTHER</option>
            </select>
          </div>
          <div className="yoga-form-group">
            <label>Number of participants (કાર્યક્રમમાં હાજર રહેલા લોકોની સંખ્યા)</label>
            <input type="number" placeholder="Number of participants (કાર્યક્રમમાં હાજર રહેલા લોકોની સંખ્યા)" />
          </div>
        </div>
        <div className="yoga-form-row">
          <div className="yoga-form-group">
            <label>Photos (કાર્યક્રમની તસવીર અપલોડ કરો)*</label>
            <input id="yoga-file-input" className="yoga-file-input" type="file" multiple onChange={handleFileChange} />
            <label htmlFor="yoga-file-input" className="yoga-file-label">Choose Files</label>
            <div className="yoga-file-names">
              {fileNames.length > 0 ? fileNames.join(', ') : 'No file chosen'}
            </div>
          </div><br></br>
          <div className="yoga-form-group">
            <label>Name of the Chief Guest present in the programme (કાર્યક્રમમાં ઉપસ્થિત મુખ્ય મહેમાનનું નામ)</label>
            <input type="text" placeholder="Name of the Chief Guest present in the programme (કાર્યક્રમમાં ઉપસ્થિત મુખ્ય મહેમાનનું નામ)" />
            <input type="text" placeholder="Name of the Chief Guest present in the programme (કાર્યક્રમમાં ઉપસ્થિત મુખ્ય મહેમાનનું નામ)" />
            <input type="text" placeholder="Name of the Chief Guest present in the programme (કાર્યક્રમમાં ઉપસ્થિત મુખ્ય મહેમાનનું નામ)" />
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
