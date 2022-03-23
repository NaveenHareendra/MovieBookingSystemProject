import React from 'react'
import { Row } from 'react-bootstrap'
import Carousel_Compoents from '../Carousel/Carousel_Compoents'
import MovieCards from '../MovieCards/MovieCards'
import banner from '../../assets/Images/banner2.jpeg'


export default function Home() {
  return (
    <div>
       <Carousel_Compoents/>
       <br>
       </br>
       <div className='banr1'>
       <h1><b>Now Showing</b></h1>
       </div>
       <br></br>
       <MovieCards/>
       <br></br>
       <Row>
         <img className='banner' src={banner}></img>
       </Row>
    </div>
  )
}
