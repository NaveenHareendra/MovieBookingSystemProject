import { Button } from "react-bootstrap";
import PaymentBookingComponent from "./PaymentBooking.component";
import '../Creditcard/Creditcard.css'

export class PaymentBooking extends PaymentBookingComponent{

    onChange = (e) => {

        const valueSelected = e.target.value;
   
        this.setState({ cardnumber:  valueSelected });
        
     }
     onchange = (e) => {

        const valueSelected = e.target.value;
   
        this.setState({ customerName:  valueSelected });
        
     }
    
    render(){
        return(
            <div className="payment">
                <div>
            <h1>
                Payment Booking
            </h1>
            <select onChange={this.onChange}>
            <option  disabled selected hidden>Choose your card</option>
               { this.state.cards.map(cards=>(
                   
                <option value={cards.number} >{cards.number}</option>
                
                

                ))}
            </select><br/>
            <br/><br/><br/><br/><br/><br/>
         <label>Movie Name :</label>
            <h4>
                {this.state.movieName}
            </h4>
            <label>Number Of Seats :</label>
            <h4>
                {this.state.seatsNoBooked}
            </h4>
            <label>Booking Date :</label>
            <h4>
                {this.state.bookingDate}
            </h4>
            <label>Price :</label>
            <h4>
                {this.state.price}
            </h4>

            <div className="pay"><Button onClick={this.saveticket}>Pay</Button></div>
            </div>
            </div>
            
        )
    }
}