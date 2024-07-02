import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Navbar1 from './Navbar'

const Land = () => {
  return (
    <div class='row'>
        <Navbar1/>
        <div class='col'><SignIn /></div>
        <div class='col'><SignUp/></div>
    </div>
  )
}

export default Land