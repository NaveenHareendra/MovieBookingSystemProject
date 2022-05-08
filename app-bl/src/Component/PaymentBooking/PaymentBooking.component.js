import { Component } from "react";
import axios from 'axios'
import { movieService } from "../../Services/movieService";
import * as jose from 'jose';
export default class PaymentBookingComponent extends Component{

    constructor(props){
        super(props);
        const userToken=localStorage.getItem('token');
        var userDecoded=jose.decodeJwt(userToken);

        this.state={
            movieId:'',
            price:0,
            seatsNoBooked:0,
            movieName:'',
            bookingDate:Date,
            customerId:'',
            availableFutureUpdate:0,
            cardnumber:0,
            cards:[],
            movieUpdate:false,
            customerName:userDecoded.name

        }
    }

    saveticket=(e)=>{
        e.preventDefault();
        let mService = new movieService();
    
        const ticket={
       movieName:this.state.movieName,
       price:this.state.price,
       seatsNoBooked:this.state.seatsNoBooked,
       bookingDate:this.state.bookingDate,
       availableFutureUpdate:this.state.availableFutureUpdate,
       customerName:this.state.customerName,
       customerId:this.state.customerId,
       cardnumber:this.state.cardnumber
       
        }
        axios.post("http://localhost:5000/ticket/add",ticket).then(()=>{
          alert("Payment Successful");
          console.log(ticket)

          this.setState({movieUpdate:true});

          if(this.state.movieUpdate === true){

            mService.movieSeatCountUpdate(this.state.movieId, this.state.availableFutureUpdate);
          }
        }).catch((err)=>{
          alert("Payment Unsuccessful!");
        })

      
        
      }

    componentDidMount(){

        axios
        .get('http://localhost:5000/debitcard')
        .then(res=>{
          console.log(res)
          this.setState({cardnumber:res.data.number})
          this.setState({cards:res.data});


        })
        .catch(err=>{
          console.log(err)
        })


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

        this.setState({
            movieId :localStorage.getItem('movieId')
        });
    }

    componentWillUnmount(){

        this.setState({
            movieId :localStorage.removeItem('movieId')
        });

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