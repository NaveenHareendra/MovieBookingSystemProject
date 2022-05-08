import React from "react";
import TicketsViewComponent from "./TicketsView.component";
import { Card } from "react-bootstrap";
import './TicketsView.css';

import "react-datepicker/dist/react-datepicker.css";
const TicketL = props =>(

    <div className="textSize">

     <Card.Header >
         <h3>
             <div className="movieNameTitle">
             <text>{props.ticket.movieName}</text><br/>
             </div>

         </h3>

     </Card.Header>
     <Card.Title className="title">

     <label>Ticket ID:</label><text >{props.ticket._id}</text>

     <br/>
     </Card.Title>
     <hr/>
     <Card.Body className="body">
         <div className="bodyBreak">
             <div className="totalPriceView">
             <label>Total Price:</label><text>{props.ticket.price} LKR/=</text><br/>
             </div>
             <div className="ticketContentView">
                 <div className="noOfSeatsDiv">
                 <label>Number of seats Booked:</label><text>{props.ticket.seatsNoBooked}</text><br/>
                 </div>
             
             <label>Show Time:</label><text>{props.ticket.bookingDate}</text><br/>
             </div>
         </div>


     </Card.Body>

    </div>
)

export class TicketsView extends TicketsViewComponent{

    TicketList(){
        return this.state.tickets.map(currentTickets=>{
           return <Card className='ticketsViewCard'>
                <TicketL ticket={currentTickets} key={currentTickets._id}/>
            </Card>;
        })
    }

    render(){
        return(

            <div className="mainTicketsView">
                <div className="insideTicketsView">
                    <h4 className="headerTickets">
                        Tickets
                    </h4>
                    <hr/>
                <br/>
                {this.state.check?
                '' 
                :'No currently booked movies'}

                <div>
                {
                    this.TicketList()
                }
                </div>
                </div>
            </div>


        );
    }
}