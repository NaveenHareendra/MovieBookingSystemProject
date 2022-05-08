import React from "react";
import { Button, Card } from "react-bootstrap";
import UserLoginComponent from "./userLogin.component";
import Spinner from 'react-bootstrap/Spinner';
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
                             type="email" 
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
                                 <Button type="submit"  className="btn btn-primary" >
                                     Login
                                     {
                                      this.state.loading?
                                        <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                      />
                                      :null
                                    }
                                     </Button>
                            </div>
                            <Button href='/registration' variant="danger" className="button" >
                                Register
                                
                                </Button>
                            </form>
                            {/* </div> */}
                        </Card.Body>
                    </Card>
                    </div>
            </div>
    
        )
    }
} 