import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Navbar'

const Faq = () => {
    const GridItem = ({ children }) => (
        <div className="col-12 col-sm-6 col-md-4 grid-item">
          {children}
        </div>
      );
  return (
    <div>
        <Navbar1/>
        <div className="container grid-container">
            <div className="row">
            <GridItem>1</GridItem>
            <GridItem>2</GridItem>
            <GridItem>3</GridItem>
            <GridItem>3</GridItem>
            </div>
  </div>
    </div>
  )
}

export default Faq