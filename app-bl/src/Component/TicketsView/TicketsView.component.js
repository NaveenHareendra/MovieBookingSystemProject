import { Component } from "react";
import axios from "axios";
import * as jose from 'jose'
export default class TicketsViewComponent extends Component{

    constructor(props){
        super(props);
        
        const userToken=localStorage.getItem('token');
        var userDecoded=jose.decodeJwt(userToken);

        this.state={
            movieName:'', 
            customerId:userDecoded.id,
            check:false,
            tickets:[]
        }
        // userDecoded=undefined;
    }

    componentDidMount(){
        
        axios.get('http://localhost:5000/ticket/getCustomerTicket/'+this.state.customerId)
        .then(res=>{
            
            if(res.status === 200){
                // alert('Success');
                this.setState({
                    check:true
                });

                this.setState({
                    tickets:res.data.ticket
                });

            }else{
                alert('unsuccessfull!');
            }
        })
    }

    // componentWillUnmount(){
    //     delete this.state;
    // }

}