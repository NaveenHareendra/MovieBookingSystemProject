import { Component } from "react";


export default class PaymentBookingComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            price:0,
            seatsNoBooked:0,
            movieName:'',
            bookingDate:Date,
            customerId:'',
            availableFutureUpdate:0
        }
    }

    componentDidMount(){
        this.setState({
            price:localStorage.getItem('price')
        });

        this.setState({
            seatsNoBooked:localStorage.getItem('noOfSeatsSelected')
        });

        this.setState({
            movieName:localStorage.getItem('movieName')
        });

        this.setState({
            bookingDate:localStorage.getItem('bookingDate')
        });

        this.setState({
            availableFutureUpdate:localStorage.getItem('availableFutureUpdate')
        });

        this.setState({
            customerId:localStorage.getItem('customerId')
        });
    }

    componentWillUnmount(){
        this.setState({
            price:localStorage.removeItem('price')
        });

        this.setState({
            seatsNoBooked:localStorage.removeItem('noOfSeatsSelected')
        });

        this.setState({
            movieName:localStorage.removeItem('movieName')
        });

        this.setState({
            bookingDate:localStorage.removeItem('bookingDate')
        });

        this.setState({
            availableFutureUpdate:localStorage.removeItem('availableFutureUpdate')
        });

        this.setState({
            customerId:localStorage.removeItem('customerId')
        });
    }
}