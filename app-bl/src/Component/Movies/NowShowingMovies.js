import React from 'react'
import NowShowingMovieComponent from './NowShowingMovies.component';
import { Button, Card } from 'react-bootstrap'
import './Movies.css';
import {PersonIcon} from '@primer/octicons-react';
import { NavLink, useNavigate   } from "react-router-dom";
import { Link } from "react-router-dom";
import BookNowComponent from '../BookNow/BookNow.component';
import BookNow from '../BookNow/BookNow';

const MovieL = props =>(
<div className='textNowShowingMovieDetails'> 
   <label className='movieLabel'>Movie Name:</label>{props.movie.movieName}<br/>
   
   <label className='movieLabel'>Availability:</label>{
   props.movie.Availability?
    <text>Available</text>:'Not Available' 
  }
  <br/>
  <label className='movieLabel'>Number of Seats Available:</label>{props.movie.seatsAvailable}<br/>
   </div>
)

export class  NowShowingMovies extends NowShowingMovieComponent {


  MovieList(){

    return this.state.movies.map(currentMovie=>{
      return  <div className='grid-containerMovie'>
        
        <Card className='nowShowingMovieCard'>
          <PersonIcon className='imageMovie'/>
          <MovieL movie={currentMovie} key={currentMovie._id}/>
          {/* <NavLink          className="btn btn-primary"
         to={{pathname:'/BookNow',
         state: {title:'from home page'} }} >    Book Test One</NavLink> */}
          {/* <Link 
             className="btn btn-primary"
             to={{
             pathname: "/BookNow",
             state: {
                  stateParam: true
                }
            }}
          > 
          Book Test
         </Link> */}
 

          <Button onClick={this.movieSelect.bind(this,currentMovie.movieName, currentMovie.seatsAvailable)} style={{ height:'40px'}} disabled={!currentMovie.Availability}>Book Now</Button>
        </Card>
        </div>;
    })

  }

  render(){
    return (
      <div>
        <div className='ButtonLocationMain'>
          <div className='ButtonLocation'>
      <Button href='/movies' variant="danger" disabled>Now Showing</Button>
      <Button href='' variant="primary">Coming Soon</Button>
      </div>
      </div>
      <div className='mainDivMovie'>

        <br/>

        {
          
          this.MovieList()
   
          }     
      </div>
      </div>
    )
  }

}
