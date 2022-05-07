import { Component } from "react";
import * as jose from 'jose';

export default class BookNowComponent extends Component{


    constructor(props){
        super(props);    
        this.handleChange = this.handleChange.bind(this);
        this.onChangeNoOfSeatsSelected = this.onChangeNoOfSeatsSelected.bind(this);
        this.bookNow = this.bookNow.bind(this);

        this.state={
            movieName:'',
            noOfSeats:0,
            startDate:new Date(),
            noOfSeatsSelected:0
        }
    }

    onChangeNoOfSeatsSelected(e){
        this.setState({
            noOfSeatsSelected:e.target.value
        });
    }

    handleChange(date) {
        this.setState({
          startDate: date
        })
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
            movieName : movieName
        });

        this.setState({
            seatsAvailable:seatsAvailable
        });

        // window.location.href='/BookNow';
    }

    
    bookNow(e){
        e.preventDefault();

        if(parseInt(this.state.noOfSeatsSelected)<=parseInt(this.state.noOfSeats) && this.state.startDate!== null){
            let availableFutureUpdate = this.state.noOfSeats - this.state.noOfSeatsSelected;
            let price = 1000 * this.state.noOfSeatsSelected;

            localStorage.setItem('availableFutureUpdate', availableFutureUpdate);
            localStorage.setItem('noOfSeatsSelected', this.state.noOfSeatsSelected);
            localStorage.setItem('bookingDate', this.state.startDate);
            localStorage.setItem('movieName', this.state.movieName);
            localStorage.setItem('price', price);

            const userToken=localStorage.getItem('token');

            var userDecoded=jose.decodeJwt(userToken);

            localStorage.setItem('customerId', userDecoded.id);

            window.location.href = '/PaymentBooking';

        }else{
            alert('Please do a valid booking...');
        }

    }
}