import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./User.css"

export default function User() {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        const fetchPrescriptions = async (patientId) => {
            try {
                const response = await axios.get(`https://medi-clone-backend.onrender.com/getdata`);
                setPrescriptions(response.data);
            } catch (error) {
                console.error('Error fetching prescriptions:', error);
            }
            
        };

        // Call fetchPrescriptions with the desired patient ID
        fetchPrescriptions('123'); // Replace '123' with the actual patient ID
    }, []);

    return (
        <div className='perscript-container'> 
            <h2>Prescriptions</h2>
            <ul>
                {prescriptions.map((prescription, index) => (
                    <li key={index}>
                        <p>Patient ID: {prescription.patientId}</p>
                        <p>Doctor ID: {prescription.doctorId}</p>
                        <p>Patient Name: {prescription.name}</p>
                        <p>Illness: {prescription.illness}</p>
                        <p>Medicines: {prescription.medicine}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

