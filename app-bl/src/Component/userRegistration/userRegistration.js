import React from "react";
import { Card,Button } from "react-bootstrap";
import './userRegistration.css';
import userRegistrationComponent from "./userRegistration.component";
import { ToastContainer } from "react-toastify";

export class Register extends userRegistrationComponent{

        render(){    
            return(
    
            <div className="mainDiv">
            <ToastContainer/>
            <div className="grid-container">
                <Card 
                >
                    <Card.Header><h4>Register</h4></Card.Header>
                    <Card.Body >
    
                        <form onSubmit={this.onSubmit}> 
                        
                            <div className="form-group">
                                <label className="LabelStyles">Name:</label>
                                <input type="text" 
                                required
                                 className="form-control" 
                                  value={this.state.name}  
                                  onChange={this.onChangeUsername}/>
                            </div>

                            <div className="form-group">
                                <label className="LabelStyles">Email:</label>
                                <input type="email"
                                 required
                                  className="form-control" 
                                   value={this.state.email} 
                                    onChange={this.onChangeEmail}/>
                            </div>
    
                            <div className="form-group">
                                <label className="LabelStyles">Contact No:</label>
                                <input type="text" 
                                required 
                                className="form-control"
                                 value={this.state.contactNo} 
                                  onChange={this.onChangeContactNo}/>
                            </div>
    
                            <div className="form-group">
                                <label className="LabelStyles">Password:</label>
                                <input 
                                type="password" 
                                required 
                                className="form-control" 
                                value={this.state.password}  
                                onChange={this.onChangePassword}/>
                            </div>
                            
                            <div className="form-group">
                                 <label className="LabelStyles">Re-Type Password:</label>
  
                                 <input
                                  type="password"
                                   required
                                    className="form-control"
                                    value={this.state.dupPassword}
                                    onChange={this.onChangeDupPassword}/>
                                   <div>
                                    <text className="error" value={this.state.wrongPassword}
                                     >{this.state.wrongPassword}</text>
                                 </div>
                            </div>

                            <br/>
                            <div className="submitButton">
                                 <input type="submit" value="Register" className="btn btn-primary" />
                            </div>
                            <Button href='/Login' variant="danger" className="button" >Go Back</Button>
                        </form>
    
                    </Card.Body>
                </Card>
                </div>
        </div>
        )}
    

}
