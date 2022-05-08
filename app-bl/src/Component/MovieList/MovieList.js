import React, { Component } from "react";
import axios from "axios";

export default class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}
	componentDidMount() {
		this.retrievePosts();
	}

	retrievePosts() {
		axios.get("/posts").then((res) => {
			if (res.data.success) {
				this.setState({
					posts: res.data.existingPosts,
				});
				console.log(this.state.posts);
			}
		});
	}

	onDelete=(id)=>{
		axios.delete(`/post/delete/${id}`).then((res)=>{
		  alert("deleted successfully")
		  this.retrievePosts();
		})
	  }
	  filterContent(posts, searchTerm) {
		  
		const result = posts.filter(
		  (post) =>
			post.name.toLowerCase().includes(searchTerm) ||
			post.director.toLowerCase().includes(searchTerm) ||
			post.actors.toLowerCase().includes(searchTerm)
		);
		this.setState({ posts: result });
	  }
	
	  handleTextSearch = (e) => {
		const searchTerm = e.currentTarget.value;
		axios.get("/posts").then((res) => {
		  if (res.data.success) {
			this.filterContent(res.data.posts, searchTerm);
		  }
		});
	  };
	

	render() {
		return (
			
			<div className="container">
				<input className="form-control"
				type="search"
				placeholder="Search"
				name="searchTerm"
				onChange={this.handleTextSearch}/>
				<p>All Movies</p>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Director</th>
							<th scope="col">Actors</th>
							<th scope="col">Ticket Price</th>
							<th scope="col">Str Date</th>
							<th scope="col">End Date</th>
							<th scope="col">Film HAll</th>
							<th scope="col">Time</th>
						</tr>
					</thead>
					<tbody>
						{this.state.posts.map((posts, index) => (
							<tr>
								<th scope="row">{index + 1}</th>
								<td>
									<a
										href={`/post/${posts.name}/${posts.director}/${posts.actors}`}
										style={{ textDecoration: "none" }}
									>
										{posts.name}
									</a>
								</td>
								<td>{posts.director}</td>
								<td>{posts.actors}</td>
								<td>{posts.ticketPrice}</td>
								<td>{posts.startDate}</td>
								<td>{posts.endDate}</td>
								<td>{posts.filmHall}</td>
								<td>{posts.time}</td>
								<td>
									<a
										className="btn btn-warning"
										href="#"
										href={`/edit/${posts._id}`}
									>
										<i className="fas fa-edit" />
										&nbsp;Edit
									</a>
									&nbsp;
									<br></br>
									<a
										className="btn btn-danger"
										href="#"
										onClick={()=>this.onDelete(posts._id)}
									>
										<i className="far fa-trash-alt" />
										&nbsp;Delete
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<button className="btn btn-success">
					<a
						href="/addmovie"
						style={{ textDecoration: "none", color: "white" }}
					>
						Add Movie
					</a>
				</button>

				{/* {this.state.posts.map(posts=>(
              <div>
                <p>{posts.topic}</p>
                <p>{posts.description}</p>
                <p>{posts.postCategory}</p>
              </div>
            ))} */}
			</div>
		);
	}
}
