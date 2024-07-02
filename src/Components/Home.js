import React from 'react'
import Navbar1 from './Navbar'
// import svg from '../Assets/main-body.svg'

const Home = () => {
  return (
    <div>
      <Navbar1/>
    <div class='row'>
        <div class='col'>
        <div className='text-section'>
        <h1 className='main-heading'>From Text to Therapy: </h1>
        <p className='home-text'>Your Path to Mental Wellbeing Starts Here.</p>
        <button className='button'>Get started</button>
        </div>
        </div>
        <div class='col'>
          image
        </div>
        
    </div>
    </div>
  )
}

export default Home