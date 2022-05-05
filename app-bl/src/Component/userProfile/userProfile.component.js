import { Component } from "react";
import * as jose from 'jose'
import { user } from "../../models/user.model";
import { userService } from "../../Services/UserServices";

export default class userProfileComponent extends Component{

    constructor(props){
        super(props);
        
        this.onChangeUpdateUsername=this.onChangeUpdateUsername.bind(this);
        this.onChangeUpdateContactNo=this.onChangeUpdateContactNo.bind(this);
        this.onChangeUpdateEmail=this.onChangeUpdateEmail.bind(this);
        this.onUpdate=this.onUpdate.bind(this);

        const userToken=localStorage.getItem('token');

        let loggedUser = new user();
        
        if(userToken){    

            var userDecoded=jose.decodeJwt(userToken);
            loggedUser.setProfile(userDecoded.name,userDecoded.contactNo, userDecoded.email, userDecoded.id)

            this.state={
                id:loggedUser.getUserId(),
                username:loggedUser.getUsername(),
                email:loggedUser.getEmail(),
                contactNumber:loggedUser.getContactNo(),
                disabledName:true,
                disabledContactNo:true,
                disabledEmail:true,
                setUsername:loggedUser.getUsername()

            }

        }

    }

    onChangeUpdateUsername(e){
        // e.preventDefault();

        this.setState({
            username:e.target.value
        })
        this.setState({
            disabledName:false
        })
    }


    onChangeUpdateEmail(){
        this.setState({
            disabledEmail:false
        })
    }

    onChangeUpdateContactNo(){
        this.setState({
            disabledContactNo:false
        })
    }

    onUpdate(e){
        e.preventDefault();
        let updateProfileServe= new userService();

        const user={
            name:this.state.username,
            email:this.state.email,
            contactNo:this.state.contactNumber
        }

        updateProfileServe.updateUserProfile(user.name, user.email, user.contactNo, this.state.id);


    }

}