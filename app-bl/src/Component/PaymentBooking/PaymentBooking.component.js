import { Component } from "react";
import axios from 'axios'

export default class PaymentBookingComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            price:0,
            customerName:'',
            seatsNoBooked:0,
            movieName:'',
            bookingDate:Date,
            customerId:'',
            availableFutureUpdate:0,
            cardnumber:0,
            cards:[]

        }
    }

    saveticket=(e)=>{
        e.preventDefault();
        
    
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
        }).catch((err)=>{
          alert(err);
        })
        
      }

    componentDidMount(){

        axios
        .get('http://localhost:5000/debitcard')
        .then(res=>{
          console.log(res)
          this.setState({cardnumber:res.data.number})
          this.setState({cards:res.data})
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