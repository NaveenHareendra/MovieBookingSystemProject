import React from "react";
import AdvanceUserProfileComponent from "./AdvanceUserProfile.component";
import './AdvanceUserProfile.css';
import { Card, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
export class AdvanceUserProfile extends AdvanceUserProfileComponent{

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
                            <Button href='/AdvancedProfileSettings' className="buttonNavigate" disabled>Advanced Profile Setting</Button>
                        </div>
                    </Card>
                </div>
                <div className="grid-containerAdvanceMainDivCard">
                 <Card className="cardTemplateAdvance">
                     <CardHeader>
                      <h1>Hi {this.state.username}</h1>
                     </CardHeader>
                     <Card.Body>
                         <div className="changeGoBackBtnPosition">
                             <div className="bodyTitlePosition">
                             <Card.Title>
                                <label>Change Password:</label>
                              </Card.Title>
                             </div>
                             <div className="bodyBackBtnPosition">
                             <Button href='Profile' variant="warning">Go Back</Button>
                             </div>
                         </div>
                         
                         <hr/>
                         <form onSubmit={this.changePassword}>
                         <div className="mainDivCardAdvanceProfile">
                         <div className="mainDivFormAdvance">
                             <div className="grid-containerOneFormAdvance">
                             <label>Previous Password:</label>
                             </div>
                             <div className="grid-containerTwoFormAdvance">
                             <input
                             required
                             className="form-control"
                             onChange={this.onChangePreviousPassword}
                             type="text" 
                             placeholder="Please insert your previous password"
                             />
                             </div>
                             </div>

                             <div className="mainDivFormAdvance">
                                 <div className="grid-containerOneFormAdvance">
                                 <label>New Password:</label>
                                 </div>
                                 <div className="grid-containerTwoFormAdvance">
                                 <input
                                 required
                                 onChange={this.onChangeNewPassword}
                                 className="form-control"
                                 placeholder="Please insert your new password"
                                 type="text"/>
                                 </div>
                             </div>

                             <div className="mainDivFormAdvance">
                                 <div className="grid-containerOneFormAdvance">
                                 <label>Re-Type New Password:</label>
                                 </div>
                                 <div className="grid-containerTwoFormAdvance">
                                 <input
                                 required
                                 onChange={this.onChangeCheckNewPassword}
                                 placeholder="Please re-type your new password"
                                 className="form-control"
                                 type="text"/>
                                 </div>
                             </div>


                         </div>

                             <Button type="submit" className="updateButtonWidth" variant="primary">Change Password</Button>

                         </form>
                         <hr/>
                         <form onSubmit={this.deleteAccount}>
                         <Button type="submit" className="updateButtonWidth" variant="danger">Delete Account</Button>
                         <input required onChange={this.onChangeDeletePassword} type="password" placeholder="Please insert your password"/>
                         </form>
                                  </Card.Body>

                 </Card>
            </div>
            </div>
        );
    }
}