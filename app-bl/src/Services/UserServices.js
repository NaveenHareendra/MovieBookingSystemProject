import axios from "axios";
import NowShowingMovieComponent from "../Component/Movies/NowShowingMovies.component";

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
            if(res.status===200)
                alert('User Updated!!!');
            else
                alert('User Not Updated!'); 
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
                    alert('Login unsuccessful, please check your credenials');
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
        .then(res=>console.log(res.data));
    }

}