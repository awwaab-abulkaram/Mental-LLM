import React from 'react'
import Navbar1 from './Navbar'
import mentalhealth from '../newani.json';
import Lottie from "lottie-react"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/getstarted'); 
  };
  return (
    <div>
      <Navbar1/>
    <div class='row'>
        <div class='col'>
        <div className='text-section'>
        <h1 className='main-heading'>From Text to Therapy
        </h1>
        <p className='home-text'>Your Path to Mental Wellbeing Starts Here.</p>
        <button className='button' onClick={handleButtonClick}>Get started</button>
        </div>
        </div>
        <div class='col'>
          <Lottie animationData={mentalhealth}/>
        </div>
        
    </div>
    </div>
  )
}

export default Home