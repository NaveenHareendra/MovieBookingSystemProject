import BookNowComponent from "./BookNow.component";
import { Card , Button} from "react-bootstrap";
import './BookNow.css';
import {PersonIcon} from '@primer/octicons-react';
import {InfoIcon } from '@primer/octicons-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
export class BookNow extends BookNowComponent{


    render(){

        return(
            <div className="bookNowMainGrid">
                <div  className="BookNowHeader">
                    <Card border='primary' className="BookNowHeaderCard">
                        <div className="BookNowHeaderCardInside">
                            <div className="BookNowHeaderInsideContainerIcon">
                                <PersonIcon className="icon"/>
                            </div>
                            <div className="BookNowHeaderInsideContainerText">
                              <text className="textStylesBookNow">
                                  {this.state.movieName} 
                              </text><br/>
                              <text className="textStylesGenre">
                                  Genre:
                              </text>
                              <br/>
                              <InfoIcon className="InfoIcon" />
                              <text className="textStylesMoreInfo">
                                  More Info
                              </text>
                            </div>
                         </div>
                    </Card>
                </div>
                <div className="bookNowMainGridInside">
                <div className="BookBodyContent">
                <Card className="bodyCard" border="primary">
                    <Card.Header>
                        <center>
                        Book Now
                        </center>
                    </Card.Header>
                    <Card.Title>
                        {this.state.noOfSeats} seats remaining...
                    </Card.Title>
                    <hr/>
                    <form onSubmit={this.bookNow}>
                    <div className="form-group">
                    <center>
                    <label>No of Seats:</label><br/>
                    <input
                    
                    onChange={this.onChangeNoOfSeatsSelected}
                             type="number" 
                             required
                            />
                    <br/>

                    <label>Select Date:</label>
                    <DatePicker 
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                         name="startDate"
                         dateFormat="MM/dd/yyyy"/>
                         </center>
                    <br/>
                    <center>
                 <Button  type='submit' className="buttonMargins" variant="primary">Book Now</Button>
    
                 </center>
                 </div>
                 </form>
                </Card>
                </div>  
                </div>
            </div>
        )
    }

}

