import PaymentBookingComponent from "./PaymentBooking.component";


export class PaymentBooking extends PaymentBookingComponent{

    render(){
        return(
            <div>
            <h1>
                Payment Booking Page!!
            </h1>
            <h4>
                {this.state.seatsNoBooked}
            </h4>
            <h4>
                {this.state.customerId}
            </h4>
            <h4>
                {this.state.price}
            </h4>
            <h4>
                {this.state.bookingDate}
            </h4>
            <h4>
                {this.state.movieName}
            </h4>
            <h4>
                {this.state.availableFutureUpdate}
            </h4>
            </div>
        )
    }
}