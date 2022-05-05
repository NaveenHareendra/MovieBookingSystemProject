import { Component } from "react"
import * as jose from 'jose';
import { user } from "../../models/user.model";
import { userService } from "../../Services/UserServices";

export default class  AdvanceUserProfileComponent extends Component{

    constructor(props){
        super(props);

        this.changePassword = this.changePassword.bind(this);
        this.onChangePreviousPassword = this.onChangePreviousPassword.bind(this);
        this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
        this.onChangeCheckNewPassword = this.onChangeCheckNewPassword.bind(this);
        this.onChangeDeletePassword = this.onChangeDeletePassword.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
        
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
                previousPassword:'',
                newPassword:'',
                newPasswordCheck:'',
                deletePassword:''
            }
        }

    }
    onChangeDeletePassword(e){
        this.setState({
            deletePassword:e.target.value
        })
    }
    onChangePreviousPassword(e){
        this.setState({
            previousPassword:e.target.value
        })
    }

    onChangeNewPassword(e){
        this.setState({
            newPassword:e.target.value
        })
    }

    onChangeCheckNewPassword(e){
        this.setState({
            newPasswordCheck:e.target.value
        })
    }

    changePassword(e){
        e.preventDefault();
        const userToken=localStorage.getItem('token');
        var userDecoded=jose.decodeJwt(userToken);
        let uService = new userService();
        
        if(this.state.newPassword === this.state.newPasswordCheck && this.state.previousPassword === userDecoded.password){
            if( this.state.newPassword>7){
                alert('Password Change in progress');
                uService.updateNewPassword(this.state.id, this.state.newPassword);
            }else
                alert('Please enter a valid number of characters...');
        }else{
            alert('Please Check the passwords you entered again');
        }

    }

    deleteAccount(e){//Efficiency Managed
        e.preventDefault();
        const userToken=localStorage.getItem('token');
        var userDecoded=jose.decodeJwt(userToken);
        if(this.state.deletePassword === userDecoded.password){
            
            let uService = new userService();
            uService.deleteAccount(userDecoded.id);

        }else{
            
            alert('Please insert the correct password');

        }
    }
}