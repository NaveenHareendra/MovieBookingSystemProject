import  { Component } from "react";
import App from "../../App";
import { userService } from "../../Services/UserServices";
import changButton from "../changeButton/changeButton";

export default class UserLoginComponent extends Component{

       
    constructor(props){
        super(props);
        // localStorage.removeItem('token');

        // alert('Token is now: '+localStorage.getItem('token'));

        // let changeButton=new changButton();
        // changeButton.onChangeText();

        this.onSubmit=this.onSubmit.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);

        
        this.state={
            email:'',
            password:''
        }
   }

   onChangeEmail(e){
    this.setState({
        email:e.target.value
    });
    }

    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }

    
    onSubmit(e){
        e.preventDefault();
        let Service=new userService();
        const user={
            password:this.state.password,
            email:this.state.email
        }

        Service.Login(user.email, user.password);
    }


}
