import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
export default function Navbar() {
  
  return (
    <div className='nav-component'>   
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MediSoft</a> 
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
  </div>
</nav>
    </div>
  )
}
