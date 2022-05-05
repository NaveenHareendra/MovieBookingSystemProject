import React from "react";
import { Button, Card } from "react-bootstrap";
import UserLoginComponent from "./userLogin.component";

import './UserLogin.css';
export class UserLogin extends UserLoginComponent{

    render(){
        return (
            <div className="mainDivLog">
                <div className="grid-containerLog">
                    <Card 
                    className="cardTemplate">
                        <Card.Header><h4>Login</h4></Card.Header>
                        <Card.Body >
                            {/* <div className="formClass"> */}
                            <form onSubmit={this.onSubmit}>
                            <label className="LabelStyles">Email:</label><br/>
                            <input
                             type="text" 
                             required
                              className="form-control"
                              value={this.state.email}
                              onChange={this.onChangeEmail}/>

                            <br/>
    
                            <label className="LabelStyles">Password:</label><br/>
                            <input
                             type="password"
                              required 
                              className="form-control"
                              value={this.state.password}
                              onChange={this.onChangePassword}/>
                            <br/>
    
                            <div className="form-group">
                                 <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                            <Button href='/registration' variant="danger" className="button" >Register</Button>
                            </form>
                            {/* </div> */}
                        </Card.Body>
                    </Card>
                    </div>
            </div>
    
        )
    }
} 