import React, { Component } from "react";
import axios from "axios";

export default class AddMovie extends Component {
	constructor(props){
		super(props);
	
		this.state = {
			name: "",
			director: "",
			actors: "",
			ticketPrice: "",
			startDate: "",
			endDate: "",
			filmHall: "",
			time: "",
		}
	}
	handleInputChange = (e) => {
	  const { name, value } = e.target;
	  this.setState({
		...this.state,
		[name]: value,
	  });
	};
	
	onSubmit = (e) => {
	  e.preventDefault();
	
	  const { name, director, actors,ticketPrice,startDate,endDate,filmHall,time} = this.state;
	
	  const data = {
		name: name,
		director: director,
		
		actors: actors,
		ticketPrice: ticketPrice,
		startDate: startDate,
		endDate: endDate,
		
		filmHall: filmHall,
		time:time

	  };
	
	  console.log(data);
	
	  axios.post("/post/save", data).then((res) => {
		if (res.data.success) {
		  this.setState({
			name: "",
			director: "",
			actors: "",
			ticketPrice: "",
			startDate: "",
			endDate: "",
			filmHall: "",
			time: "",
			

		  });
		}
	  });
	};
	  render() {
		return (
		  <div className="col-md-8 mt-4 mx-auto">
	
				<h1 className="h3 mb-3 font-weight-normal">Create New Movie</h1>
	
				<form className="need-validation" noValidate>
					
				  <div className="form-group" style={{ marginBottom: "15px" }}>
					<label style={{ marginBottom: "5px" }}>Movie Name</label>
					<input
					  type="text"
					  className="form-control"
					  name="name"
					  placeholder="Enter Topic"
					  value={this.state.name}
					  onChange={this.handleInputChange}
					/>
				  </div>

				  <div className="form-group" style={{ marginBottom: "15px" }}>
					<label style={{ marginBottom: "5px" }}>Director</label>
					<input
					  type="text"
					  className="form-control"
					  name="director"
					  placeholder="Enter Director"
					  value={this.state.director}
					  onChange={this.handleInputChange}
					  required
					/>
				  </div>
		
				  <div className="form-group" style={{ marginBottom: "15px" }}>
					<label for="exampleFormControlTextarea1" style={{ marginBottom: "5px" }}>actors</label>
					<textarea
					  type="text"
					  className="form-control"
					  name="actors"
					  id="exampleFormControlTextarea1"
					  rows="3"
					  placeholder="Enter actors"
					  value={this.state.actors}
					  onChange={this.handleInputChange}
					  required
					/>
				  </div>
	
	   
		
				  <div className="form-group" style={{ marginBottom: "15px" }}>
					<label style={{ marginBottom: "5px" }}>ticketPrice</label>
					<input
					  type="text"
					  className="form-control"
					  name="ticketPrice"
					  placeholder="Enter Post ticketPrice"
					  value={this.state.ticketPrice}
					  onChange={this.handleInputChange}
					  required
					/>
				  </div>

				  <div className="form-group" style={{ marginBottom: "15px" }}>
					<label style={{ marginBottom: "5px" }}>startDate</label>
					<input
					  type="date"
					  className="form-control"
					  name="startDate"
					  placeholder="Enter Post startDate"
					  value={this.state.startDate}
					  onChange={this.handleInputChange}
					  required
					/>
				  </div>

				  <div className="form-group" style={{ marginBottom: "15px" }}>
					<label style={{ marginBottom: "5px" }}>endDate</label>
					<input
					  type="date"
					  className="form-control"
					  name="endDate"
					  placeholder="Enter Post endDate"
					  value={this.state.endDate}
					  onChange={this.handleInputChange}
					  required
					/>
				  </div>

				  <div className="form-group" style={{ marginBottom: "15px" }}>
					<label style={{ marginBottom: "5px" }}>filmHall</label>
					<input
					  type="text"
					  className="form-control"
					  name="filmHall"
					  placeholder="Enter Post filmHall"
					  value={this.state.filmHall}
					  onChange={this.handleInputChange}
					  required
					/>
				  </div>

				  <div className="form-group" style={{ marginBottom: "15px" }}>
					<label style={{ marginBottom: "5px" }}>time</label>
					<input
					  type="time"
					  className="form-control"
					  name="time"
					  placeholder="Enter Post time"
					  value={this.state.time}
					  onChange={this.handleInputChange}
					  required
					/>
				  </div>
		
				  <button
					className="btn btn-outline-success"
					type="submit"
					style={{ marginTop: "15px" }}
					onClick={this.onSubmit}
					href='/movielist'
				  >
					<i className="fas fa-save"></i>&nbsp;Save
				  </button>
	
			
				</form>
			  </div>   
		)
	  }
	}
	