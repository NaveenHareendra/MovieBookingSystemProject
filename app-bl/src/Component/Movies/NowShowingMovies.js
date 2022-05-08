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
  }<br/>
  <label className='movieLabel'>Number of Seats Available:</label>{props.movie.seatsAvailable}<br/>
  </div>

)

export class  NowShowingMovies extends NowShowingMovieComponent {


  MovieList(){

    return this.state.movies.map(currentMovie=>{
      return  <div className='grid-containerMovie'>
        
        <Card className='nowShowingMovieCard'>
          <div className='grid-card'>

            <div className='moviePicture'>
                <div class="container">
                    <PersonIcon className='imageMovie'/> 
                    <div class="overlay">
                      

                    </div>
                 </div>
            </div>

          <div className='movieDetails'>
            <MovieL movie={currentMovie} key={currentMovie._id}/>
            <Button  onClick={this.movieSelect.bind(this,currentMovie.movieName, currentMovie.seatsAvailable, currentMovie._id)} style={{ height:'40px'}} disabled={!currentMovie.Availability}>Book Now</Button>
          </div>
          </div>
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
