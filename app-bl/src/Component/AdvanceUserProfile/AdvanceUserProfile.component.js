import { Component } from "react"
import * as jose from 'jose';
import { user } from "../../models/user.model";
import { userService } from "../../Services/UserServices";
import { toast } from "react-toastify";

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
                deletePassword:'',
                loading:false
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

    async changePassword(e){
        e.preventDefault();
        this.setState({
            loading:true
        })

        const changePassword={
            status:false
        }
        let userToken=localStorage.getItem('token');
        var userDecoded=jose.decodeJwt(userToken);
        let uService = new userService();
        
        if(this.state.newPassword === this.state.newPasswordCheck && this.state.previousPassword === userDecoded.password){
            if( this.state.newPassword.length>7){
                
                toast.info('Password Changes in progress');

                changePassword.status= await uService.updateNewPassword(this.state.id, this.state.newPassword);
                
                if(changePassword.status === true){
                    await uService.RefreshLoginCredentials(userDecoded.email, this.state.newPassword);
                    toast.success('Your password has been changed');
                    this.setState({
                        loading:false
                    })
                    
                }else{
                    toast.error('Sorry password change failed...');
                    this.setState({
                        loading:false
                    })
                }

            }else{
                toast.error('Please enter a valid number of characters...');
                this.setState({
                    loading:false
                })
            }
        }else{
            toast.error('Please Check the passwords you entered again');
            this.setState({
                loading:false
            });
        }

    }

    deleteAccount(e){//Efficiency Managed
        e.preventDefault();
        this.setState({
            loading:true
        });
        const userToken=localStorage.getItem('token');
        var userDecoded=jose.decodeJwt(userToken);
        if(this.state.deletePassword === userDecoded.password){
            
            let uService = new userService();
            uService.deleteAccount(userDecoded.id);

        }else{
            
            toast.warning('Please insert the correct password');

        }
    }
}