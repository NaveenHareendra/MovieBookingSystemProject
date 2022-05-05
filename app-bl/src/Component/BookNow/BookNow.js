import BookNowComponent from "./BookNow.component";
import { Card } from "react-bootstrap";
import './BookNow.css';
import {PersonIcon} from '@primer/octicons-react';
import {InfoIcon } from '@primer/octicons-react';


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
                <div className="BookBodyContent">
                    <label>No of Seats</label>:
                    <input
                             type="text" 
                             required
                            />
                            
                    <br/>
                  
                </div>
            </div>
        )
    }

}

