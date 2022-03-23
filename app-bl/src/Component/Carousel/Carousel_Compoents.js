import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../assets/Images/img1.jpeg'
import img2 from '../../assets/Images/img2.jpeg'
import img3 from '../../assets/Images/img4.jpeg'

function Carousel_Compoents() {
  return (
    <div><Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 h-80"
        src={img1}
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-80"
        src={img2}
        alt="Second slide"
      />
  
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-80"
        src={img2}
        alt="Third slide"
      />
  
      
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Carousel_Compoents