import { Component } from "react";
import { useLocation, useParams } from "react-router-dom";
import { movieClass } from "../../models/movie.model";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

export default class BookNowComponent extends Component{


    constructor(props){
        super(props);    

        this.state={
            movieName:'',
            noOfSeats:0
        }
    }

    componentDidMount(){

        this.setState({
            movieName:localStorage.getItem('movieName')
        });

        this.setState({
            noOfSeats:localStorage.getItem('noOfSeats')
        });
    }

    componentWillUnmount(){
        localStorage.removeItem('movieName');
        localStorage.removeItem('noOfSeats');
    }

    fromNowShowingMovies(movieName, seatsAvailable){

        this.setState({
            moviename : movieName
        });

        this.setState({
            seatsAvailable:seatsAvailable
        });

        // window.location.href='/BookNow';
    }
}