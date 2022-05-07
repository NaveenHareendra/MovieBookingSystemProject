import { Button } from "react-bootstrap";
import PaymentBookingComponent from "./PaymentBooking.component";


export class PaymentBooking extends PaymentBookingComponent{

    onChange = (e) => {

        const valueSelected = e.target.value;
   
        this.setState({ cardnumber:  valueSelected });
        
     }
    
    render(){
        return(
            <div>
            <h1>
                Payment Booking Page!!
            </h1>
            <select onChange={this.onChange}>
            <option  disabled selected hidden>Choose your card</option>
               { this.state.cards.map(cards=>(
                   
                <option value={cards.number} >{cards.number}</option>
                
                

                ))}
            </select>

            
            <h4>
                {this.state.movieName}
            </h4>
            <h4>
                {this.state.seatsNoBooked}
            </h4>
            <h4>
                {this.state.bookingDate}
            </h4>
            <h4>
                {this.state.price}
            </h4>

            <div><Button onClick={this.saveticket}>Pay</Button></div>
            
            </div>
            
        )
    }
}