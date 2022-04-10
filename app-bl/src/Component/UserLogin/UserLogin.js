import React from "react";
import { Button, Card } from "react-bootstrap";
import './UserLogin.css';

export default function Login(){
    return (
        <div className="mainDiv">
            <div className="grid-container">
                <Card 
                className="cardTemplate">
                    <Card.Header><h4>Login</h4></Card.Header>
                    <Card.Body >
                        {/* <div className="formClass"> */}
                        <form>
                        <label className="LabelStyles">Email:</label><br/>
                        <input type="text" required className="form-control"></input>
                        <br/>

                        <label className="LabelStyles">Password:</label><br/>
                        <input type="text" required className="form-control"></input>
                        <br/>

                        <div className="form-group">
                             <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                        <Button variant="danger" className="button" >Register</Button>
                        </form>
                        {/* </div> */}
                    </Card.Body>
                </Card>
                </div>
        </div>

    )
}