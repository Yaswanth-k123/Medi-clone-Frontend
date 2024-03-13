import React from 'react';
import Navbar from '../components/Navbar';
import Doctor from './Doctor';
import { useNavigate } from 'react-router-dom';
import './Start.css'; // Import the CSS file

export default function Start() {
 const navigate = useNavigate();
    
 const handleClick = () => {
      navigate('/doctor');
 };
 const handle = () => {
    navigate('/signup');
 };
 return (
    <div className="start-container">
      <div className="start-buttons">
        <button onClick={handleClick}>Doctor</button>
        <button onClick={handle}>Patient</button>
      </div>
    </div>
 )
}
