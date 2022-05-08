import React from 'react'
import ComingSoonMoviesComponent from './ComingSoonMovies.component';
import { Button, Card } from 'react-bootstrap'
import './ComingSoonMovies.css';
import {PersonIcon} from '@primer/octicons-react';


const MovieL = props =>(
<div className='textNowShowingMovieDetails'> 
<h3>
<label className='movieLabel'>Movie Name:</label>{props.movie.movieName}<br/>
</h3>
<h3>
<label className='movieLabel'>Release Date:</label>{props.movie.releaseDate}<br/>
</h3>

  </div>

)

export class  ComingSoonMovies extends ComingSoonMoviesComponent {


  MovieList(){

    return this.state.movies.map(currentMovie=>{
      return  <div className='grid-containerMovie'>
        
        <Card className='nowShowingMovieCard'>
          <div className='grid-card-cs'>

            <div className='moviePicture'>
                <div class="container">
                    <PersonIcon className='imageMovie'/> 
                    <div class="overlay">
                      

                    </div>
                 </div>
            </div>

          <div className='movieDetails'>
            <MovieL movie={currentMovie} key={currentMovie._id}/>
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
      <Button href='/movies' variant="danger">Now Showing</Button>
      <Button href='/comingsoonmovies' variant="primary" disabled>Coming Soon</Button>
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
