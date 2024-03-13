import './App.css';
import React, {useState,useEffect} from "react";
import {Link,Routes,Route} from "react-router-dom";
import Axios from "axios";
import New from "./components/New"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Doctor from './pages/Doctor';
import User from './pages/User';
import SignUp from './components/SignUp';
import Start from './pages/Start';
import Initial from './pages/Initial';
function App() {
  const [log,setLog]=useState(false);
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/start" element={<Start />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/user" element={<User />} />
        </Routes>
    </div>
  );
}

export default App;
