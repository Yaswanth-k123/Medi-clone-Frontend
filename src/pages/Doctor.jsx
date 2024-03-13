import React, { useState } from 'react';
import axios from "axios";
import './Doctor.css'; // Import the CSS file

export default function Doctor() {
    const [formData, setFormData] = useState({
        patientId: '',
        doctorId: '',
        patientName: '',
        illness: '',
        medicines: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post("https://medi-clone-backend.onrender.com/prescript", formData);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="doctor-container">
            <h2>Prescription Form</h2>
            <form className="doctor-form" onSubmit={handleSubmit}>
                <label htmlFor="patientId">Patient ID:</label>
                <input type="text" id="patientId" name="patientId" value={formData.patientId} onChange={handleChange} required /><br /><br />

                <label htmlFor="doctorId">Doctor ID:</label>
                <input type="text" id="doctorId" name="doctorId" value={formData.doctorId} onChange={handleChange} required /><br /><br />

                <label htmlFor="patientName">Patient Name:</label>
                <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} /><br /><br />

                <label htmlFor="illness">Illness:</label>
                <input type="text" id="illness" name="illness" value={formData.illness} onChange={handleChange} /><br /><br />

                <label htmlFor="medicines">Required Medicines:</label>
                <textarea id="medicines" name="medicines" rows="4" value={formData.medicines} onChange={handleChange}></textarea><br /><br />

                <input type="submit" value="Submit Prescription" />
            </form>
        </div>
    );
}
