import React from "react";
import userProfileComponent from "./userProfile.component";
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import './userProfile.css';
import {PencilIcon} from '@primer/octicons-react';
import {PersonIcon} from '@primer/octicons-react';

export class UserProfile extends userProfileComponent{
    render(){
        return(
            <div className="mainDivCard">
                <div className="grid-containerButtonBar">
                    <Card className="cardTemplateButton">
                        <div className="marginSetBtn">
                            <Button className="buttonNavigate">View Tickets</Button><br/>
                            <Button className="buttonNavigate">View Favourite Movies</Button><br/>
                            <Button className="buttonNavigate">Purchase History</Button><br/>
                            <Button className="buttonNavigate">Payment Methods</Button><br/>
                            <Button href='/AdvancedProfileSettings' className="buttonNavigate">Advanced Profile Setting</Button>
                        </div>
                    </Card>
                </div>
                <div className="grid-containerMainDivCard">
            <Card className='cardTemplate'>
                <CardHeader>
                <h1>Hi {this.state.setUsername}</h1>
                </CardHeader>
                <Card.Body>
                    <div className="mainDivCardProfile">
                <form onSubmit={this.onUpdate}>

                
                <label>Name:</label>

                <div className="mainDivForm">
                    <div className="grid-containerOneForm">
                        <input
                        required
                        type="text"
                        className="form-control"
                        value={this.state.username}
                        disabled={(this.state.disabledName)? "disabled" : ""}
                        onChange={this.onChangeUpdateUsername}/>
                    </div>
                    <div className="grid-containerTwoForm">
                        <Button 
                        onClick={this.onChangeUpdateUsername}
                        style={{width:'50px', height:'35px'}}>
                                <PencilIcon/>
                        </Button>
                    </div>
                </div>            

                <label>Email:</label>
                <div className="mainDivForm">
                    <div className="grid-containerOneForm">
                        <input
                        required
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        disabled={(this.state.disabledEmail)? "disabled" : ""}
                        onChange={this.onChangeUpdateEmail}/>
                    </div>
                    <div className="grid-containerTwoForm">
                        <Button 
                            onClick={this.onChangeUpdateEmail}
                            style={{width:'50px', height:'35px'}}>
                             <PencilIcon/>
                            </Button>  
                    </div>
                </div>

                <label>Contact Number:</label>
                
                <div className="mainDivForm">
                    <div className="grid-containerOneForm">
                        <input
                        required
                        type="text"
                        className="form-control"
                        value={this.state.contactNumber}
                        disabled={(this.state.disabledContactNo)? "disabled" : ""}
                        onChange={this.onChangeUpdateContactNo}/>
                    </div>
                    <div className="grid-containerTwoForm">
                        <Button 
                            onClick={this.onChangeUpdateContactNo}
                            style={{width:'50px', height:'35px'}}>
                               <PencilIcon/>
                            </Button> 
                    </div>
              </div>      
             <input type="submit" value="Update" className="btn btn-primary" />  
            
             </form>  
             <div className="grid-mainDivProfile">
                 <PersonIcon className="profileIcon"/>
                 </div> 
             </div> 
            </Card.Body>
            </Card>
            </div>
            </div>
        )
    }
}