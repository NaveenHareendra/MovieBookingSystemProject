import axios from "axios";
import NowShowingMovieComponent from "../Component/Movies/NowShowingMovies.component";
import * as jose from 'jose';
export class userService{
    
    updateUserProfile(name, email, contactNo, id){

        const user={
            name:name,
            email:email,
            contactNo:contactNo,
            id:id
        }

        axios.post('http://localhost:5000/user/update/'+user.id, user)
        .then(res=>{
            if(res.status===200){
                alert('User Updated!!!');
                const userToken=localStorage.getItem('token');
                var userDecoded=jose.decodeJwt(userToken);
                this.RefreshLoginCredentials(user.email, userDecoded.password);
            }else
                alert('User Not Updated!'); 
        })
        .catch(function(error){
            alert('Oops! Something went wrong');
            console.log(error);
        })

    }

    updateNewPassword(id, newPassword){
        const userProfile ={
            id:id,
            password : newPassword
        }

        axios.post('http://localhost:5000/user/updateNewPassword/'+userProfile.id+'/'+userProfile.password)
        .then(res=>{
            if(res.status===200){
                alert('password update sucessful !');
                const userToken=localStorage.getItem('token');
                var userDecoded=jose.decodeJwt(userToken);
                this.RefreshLoginCredentials(userDecoded.email, userProfile.password);
            }else{
                alert('Oops... Something went wrong..')
            }
        })
    }

    RefreshLoginCredentials(email, password){
        
        axios.get('http://localhost:5000/user/Login/'+email+'/'+password)
        .then(res=>{
            if(res.status===200){//Checks if the response is 'OK'  
                if(res.data.user){
                    localStorage.setItem('token', res.data.user);
                    window.location.href='/Profile';
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
                    movies.fetchUser(localStorage);
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
        
    }

    register(name, password, contactNo, email){//Register Service
        const user={
            name:name,
            password:password,
            contactNo:contactNo,
            email:email
        }
        axios.post('http://localhost:5000/user/add', user)
        .then(res=>{console.log(res.data)
            if(res.status === 200){
                alert('Registration Success!')
            }else{
                alert('Registration Unsuccessful..');
            }
        });
    }

    deleteAccount(id){
        const user ={
            id:id
        }

        axios.delete('http://localhost:5000/user/deleteAccount/'+user.id)
        .then(res=>{
            if(res.status ===200){
                alert('Delete Successful');
                localStorage.removeItem('token');
                window.location.href = '/';
            }else{
                alert('Something went wrong...');
            }
        })
    }
}

