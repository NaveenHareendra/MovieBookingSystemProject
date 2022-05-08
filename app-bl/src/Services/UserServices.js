import axios from "axios";
import NowShowingMovieComponent from "../Component/Movies/NowShowingMovies.component";
import * as jose from 'jose';
import userProfileComponent from "../Component/userProfile/userProfile.component";
import { user } from "../models/user.model";
import changButton from "../Component/changeButton/changeButton";
export class userService{
     loggedUser=new user(); 
     buttonChange=new changButton();


    async updateUserProfile(name, email, contactNo, id){

        const user={
            name:name,
            email:email,
            contactNo:contactNo,
            id:id,
            test:0
        }
        let bool = true;
        await axios.post('http://localhost:5000/user/update/'+user.id, user)
        .then(res=>{
            if(res.status===200){
                // alert('User  Updated!'); 
                const userToken=localStorage.getItem('token');
                var userDecoded=jose.decodeJwt(userToken);
                // this.RefreshLoginCredentials(user.email, userDecoded.password);
                user.test = 1;
            }else{
                alert('User Not Updated!'); 
                return false;
            }
        })
        .catch(function(error){
            alert('Oops! Something went wrong');
            console.log(error);
            return false;
        })

        if(user.test===1){
            return bool;
        }else{
            return false;
        }

    }

    async updateNewPassword(id, newPassword){
        const userProfile ={
            id:id,
            password : newPassword,
            status:false
        }

        await axios.post('http://localhost:5000/user/updateNewPassword/'+userProfile.id+'/'+userProfile.password)
        .then(res=>{
            if(res.status===200){

                // alert('password update sucessful !');
                const userToken=localStorage.getItem('token');
                var userDecoded=jose.decodeJwt(userToken);
                userProfile.status = true;
                // this.RefreshLoginCredentials(userDecoded.email, userProfile.password);
            }else{
                alert('Oops... Something went wrong..')
            }
        });

        if(userProfile.status === true){
            return true;
        }else{
            return false;
        }
    }
    //Updates the Login state...
    async RefreshLoginCredentials(email, password){
        let vars={
            bool: Boolean
        }

        await axios.get('http://localhost:5000/user/Login/'+email+'/'+password)
        .then(res=>{
            if(res.status===200){//Checks if the response is 'OK'  
                if(res.data.user){
                    localStorage.setItem('token', res.data.user);
                    // window.location.href='/Profile';
                    // uProfile.notifyAndUpdateChange();

                    vars.bool =true;
                }
                else{//Checks if a 404 is returned.
                    alert('Login unsuccessful, please check your credentials');
                    // alert('Login failed');
                }

            }
        })
        .catch(function(error){
            alert('Oops! Something went wrong');
            console.log(error);
        })

        if(vars.bool === true ){
            let newToken = localStorage.getItem('token');
            return newToken;
        }else{
            return;
        }

    }
    Login(email, password){
    
        let movies=new NowShowingMovieComponent();

        const user={
            password:password,
            email:email
        }

        axios.get('http://localhost:5000/user/Login/'+user.email+'/'+user.password)
        .then(res=>{
            if(res.status===200){//Checks if the response is 'OK'  
                if(res.data.user){
                    localStorage.setItem('token', res.data.user);
                    const userToken=localStorage.getItem('token');
                    const userDecoded=jose.decodeJwt(userToken);
                    this.loggedUser.setProfile(userDecoded.name, userDecoded.contactNo, userDecoded.email );
                    this.buttonChange.changeButtonState(this.loggedUser);
                }
                else{//Checks if a 404 is returned.
                    alert('Login unsuccessful, please check your credentials');
                    // alert('Login failed');
                }

            }
        })
        .catch(function(error){
            alert('Login Failed...');
            window.location.href='/Login';
            console.log(error);
        })
        
    }

    async register(name, password, contactNo, email){//Register Service
        const user={
            name:name,
            password:password,
            contactNo:contactNo,
            email:email,
            status:false,
            alreadyReg:''
        }
        await axios.post('http://localhost:5000/user/add', user)
        .then(res=>{
            console.log(res.data)
            if(res.status === 200){
                // alert('Registration Success!')
                // window.location.href='/Login';
                user.status = true;
            }
            if(res.data.bool === false){
                user.status = false;
                user.alreadyReg = 'alreadyRegistered';
                // alert('This account is already registered..');
            }
        });

        if(user.status === true){
            return true;
        }else{
            if(user.alreadyReg  ===  'alreadyRegistered'){
                return user.alreadyReg ;
            }else{
                return false;
            }

        }
    }

    deleteAccount(id){
        const user ={
            id:id
        }

        axios.delete('http://localhost:5000/user/deleteAccount/'+user.id)
        .then(res=>{
            if(res.status ===200){
                // alert('Delete Successful');
                localStorage.removeItem('token');
                window.location.href = '/';
            }else{
                alert('Something went wrong...');
            }
        })
    }
}

