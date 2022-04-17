import { Component } from "react";
import * as jose from 'jose'
import { user } from "../../models/user.model";
import changButton from "../changeButton/changeButton";
import userProfileComponent from "../userProfile/userProfile.component";
import axios from "axios";
import { movieService } from "../../Services/movieService";
export default class NowShowingMovieComponent extends Component{

     loggedUser=new user(); 
     
     buttonChange=new changButton();

     profileComponent = new userProfileComponent();

     mService = new movieService();
     
     constructor(props){
         super(props);
         
         this.state={
            movieName:'',
            availability:'',
            Seats:0,
            movies:[]
         }
         

     }

     componentDidMount(){
         axios.get('http://localhost:5000/movie/nowShowingMovies/')
         .then(response=>{
             this.setState({
                movies:response.data
             });
         })
         .catch(function(error){
            // alert('Oops! Something went wrong');
            console.log(error);
        })

     }

     fetchUser(localStorage){
        const userToken=localStorage.getItem('token');

        if(userToken){    

            const userDecoded=jose.decodeJwt(userToken);
            
            if(!userDecoded){
                localStorage.removeItem(userToken);
                alert('Login unsuccessful');

            }else{
                // console.log(userDecoded);
                this.loggedUser.setProfile(userDecoded.name, userDecoded.contactNo, userDecoded.email );

                this.buttonChange.changeButtonState(this.loggedUser);

            }
        }

    }

}