import React, { useState } from 'react';
import axios from 'axios'; 
import "./Home.css";
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [msg, setMsg] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const submit = async (e) => {
        e.preventDefault();
        console.log(msg);
        try {
            await axios.post("https://medi-clone-backend.onrender.com/", {
                data: msg,
            });
            console.log(msg);
            // Redirect to the new component using navigate
            navigate('/new'); // Redirect to the '/new' route after submission
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
        <Navbar />
            <div className='form-container'>
                <h3>Enter the Symptoms in the Below Text Box</h3>
                <form onSubmit={submit} className='form'>
                    <textarea 
                        name="text" 
                        value={msg}
                        onChange={(e) => {setMsg(e.target.value)}} 
                        cols="80" 
                        rows="15" 
                        placeholder='Symptoms'>
                    </textarea>
                    <button type="submit" className='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}
