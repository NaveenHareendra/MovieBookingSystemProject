import axios from "axios";

export class movieService{

    movieSeatCountUpdate(id, seatsNo){
        axios.post('http://localhost:5000/movie/movieSeatsCountUpdate/'+id+'/'+seatsNo)
        .then(response=>{
            if(response.data === 'Movie Updated...'){
                console.log('update success...');
            }
        }).catch(function(error){
            // alert('Oops! Something went wrong');
            console.log(error);
        })
    }

}