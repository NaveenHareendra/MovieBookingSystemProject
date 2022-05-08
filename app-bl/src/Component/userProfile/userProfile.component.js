import { Component } from "react";
import * as jose from 'jose'
import { user } from "../../models/user.model";
import { userService } from "../../Services/UserServices";
import {toast} from 'react-toastify';
import React from "react";
export default class userProfileComponent extends Component{

    constructor(props){
        super(props);

        this.onChangeUpdateUsername=this.onChangeUpdateUsername.bind(this);
        this.onChangeUpdateContactNo=this.onChangeUpdateContactNo.bind(this);
        this.onChangeUpdateEmail=this.onChangeUpdateEmail.bind(this);
        this.onUpdate=this.onUpdate.bind(this);
        this.onChangeUpdateUsernameState = this.onChangeUpdateUsernameState.bind(this);
        this.onChangeUpdateContactNoState = this.onChangeUpdateContactNoState.bind(this);
        this.onChangeUpdateEmailState = this.onChangeUpdateEmailState.bind(this);

    
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
                setUsername:loggedUser.getUsername(),
                checkEmail:loggedUser.getEmail(),
                checkContactNo:loggedUser.getContactNo(),
                updateButtonAppearUsername:false,
                updateButtonAppearEmail:false,
                updateButtonAppearContact:false,
                loading:false,
                toaster:false
            }
           
        }

    }

    notifyAndUpdateChange(){

        // e.preventDefault();
        toast.success('User Update Success !');

        const userToken=localStorage.getItem('token');
        var userDecoded=jose.decodeJwt(userToken);
        
        this.setState({
            setUsername:userDecoded.name
        });

        this.setState({
            username:userDecoded.name
        });

        this.setState({
            email:userDecoded.email
        });

        this.setState({
            contactNumber:userDecoded.contactNo
        });

        this.setState({
            username:userDecoded.name
        });

        this.setState({
            loading:false
        });
    }

    onChangeUpdateUsername(e){

        this.setState({
            username:e.target.value
        });

        if(e.target.value  !== this.state.setUsername){
            this.setState({
                updateButtonAppearUsername:true
            });
        }else{
            this.setState({ 
                updateButtonAppearUsername:false
            });
        }

    }

    onChangeUpdateEmail(e){
        this.setState({
            email:e.target.value
        });

        if(e.target.value  !== this.state.checkEmail){
    
            this.setState({   
                updateButtonAppearEmail:true
            });
        }else{
            this.setState({ 
                updateButtonAppearEmail:false
            });
        }
    
    }

    onChangeUpdateContactNo(e){
        this.setState({
            contactNumber:e.target.value
        });
        
        if(parseInt(e.target.value) !== this.state.checkContactNo){
            this.setState({
                updateButtonAppearContact:true
           });
        }else{
            this.setState({ 
                updateButtonAppearContact:false
            });
        }
    }

    onChangeUpdateUsernameState(e){
        if(this.state.disabledName === true){
        
            this.setState({
        
                disabledName:false
        
            })
    
        }else{
            this.setState({
        
                disabledName:true
        
            })
        }

    }

    onChangeUpdateEmailState(e){
        if(this.state.disabledEmail === true){
        
            this.setState({
        
                disabledEmail:false
        
            })
    
        }else{
            this.setState({
        
                disabledEmail:true
        
            })
        }

    }

    onChangeUpdateContactNoState(e){
        if(this.state.disabledContactNo === true){
        
            this.setState({
        
                disabledContactNo:false
        
            })
    
        }else{
            this.setState({
        
                disabledContactNo:true
        
            })
        }

    }


    async onUpdate(e){
        e.preventDefault();
        this.setState({
            loading:true
        })
        let updateProfileServe= new userService();
        
        const user={
            name:this.state.username,
            email:this.state.email,
            contactNo:this.state.contactNumber,
            checkStatus:Boolean
        }
        if(parseInt(this.state.contactNumber) !== this.state.checkContactNo
             || this.state.username !== this.state.setUsername
             || this.state.email !== this.state.checkEmail){
                // await updateProfileServe.updateUserProfile(user.name, user.email, user.contactNo, this.state.id).then(boolean =>{
                //     user.checkStatus = boolean;
                // })
            user.checkStatus = await updateProfileServe.updateUserProfile(user.name, user.email, user.contactNo, this.state.id);

            if(user.checkStatus === true){
                let userToken=localStorage.getItem('token');
                var userDecoded=jose.decodeJwt(userToken);
                
                userToken= await updateProfileServe.RefreshLoginCredentials(user.email, userDecoded.password);
                userDecoded = jose.decodeJwt(userToken);

                this.setState({
                    setUsername:userDecoded.name
                });
        
                this.setState({
                    username:userDecoded.name
                });
        
                this.setState({
                    email:userDecoded.email
                });
        
                this.setState({
                    contactNumber:userDecoded.contactNo
                });
        
                this.setState({
                    username:userDecoded.name
                });
        
                this.setState({
                    loading:false
                });

                this.setState({
                    updateButtonAppearUsername:false
                });
    
                this.setState({
                    updateButtonAppearEmail:false
                });
    
    
                this.setState({
                    updateButtonAppearContact:false
                });

                toast.success('Update Successful!');
            }else{
                toast.success('Update unsuccessful... >.<');
            }
        }else{
            this.setState({
                updateButtonAppearUsername:false
            });

            this.setState({
                updateButtonAppearEmail:false
            });


            this.setState({
                updateButtonAppearContact:false
            });
        }
        
    }

}