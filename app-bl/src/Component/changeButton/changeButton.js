import { Component } from "react";
import {user} from "../../models/user.model";

export default class changButton extends Component{
     userLog= new user();
     token=localStorage.getItem('token');

     constructor(props){
         super(props);
         this.onChangeText=this.onChangeText.bind(this);

         if(!localStorage.getItem('token')){
        
            this.state={
        
                changeButton:'Login',
                path:'/Login',
                isTokenAvailable:false
            }

        }else{

            this.state={
        
                changeButton:'Log-Out',
                path:'/',
                isTokenAvailable:true
        
            }
        }

     }
    
    onChangeText(){//Removes Login Token
        if(localStorage.getItem('token')){
            localStorage.removeItem('token');
        }
        this.isTokenAvailable=false;
    } 

    changeButtonState(loggedUser){

        this.userLog=loggedUser;
        if(this.userLog){
            
            // alert('Login Successful');

            window.location.href='/movies';

        }else{
            alert('didnt change');

        }
    }

    

}

