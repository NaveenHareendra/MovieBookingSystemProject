import React, { Component } from "react";

import { Card, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import img5 from "../../assets/Images/img5.jpeg";
import img6 from "../../assets/Images/img6.jpeg";
import img7 from "../../assets/Images/img7.jpeg";
import img8 from "../../assets/Images/img8.jpeg";
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

	


	render() {
		return (
			<div>
				<Container data-aos="fade-up">
					<Row style={{ paddingLeft: "100px" }}>
						<div className="col-md-3 ">
							{/* <Card style={{ width: "16rem" }} className="card-set">
								<Card.Img className="card-img" variant="top" src={img5} />


									{this.state.posts.map((posts) => (
										<>
											<Card.Title>
												<b>posts.name</b>
												<p></p>
											</Card.Title>

											<Button
												variant="success"
												className="card-button"
												href="/Trading"
											>
												Book My Show
											</Button>
										</>
									))}
								
							</Card> */}
						</div>
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
								<p>{posts.director}</p>
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

						{/* <div className="col-md-3 ">
							<Card style={{ width: "16rem" }} className="card-set">
								<Card.Img
									variant="top"
									className="card-img"
									src={img6}
									style={{}}
								/>
								<Card.Body>
									<Card.Title>
										<b>Movie Name</b>
										<p>xxxxxx</p>
									</Card.Title>

									<Button
										variant="success"
										className="card-button"
										href="/Lesure"
									>
										Book My Show
									</Button>

									<br></br>
									<br></br>
								</Card.Body>
							</Card>
						</div>

						<div className="col-md-3 ">
							<Card style={{ width: "16rem" }} className="card-set">
								<Card.Img variant="top" className="card-img" src={img7} />
								<Card.Body>
									<Card.Title>
										<b>Movie Name</b>
										<p>xxxxxx</p>
									</Card.Title>

									<Button
										variant="success"
										className="card-button"
										href="/Partnership"
									>
										Book My Show
									</Button>
									<br></br>
									<br></br>
								</Card.Body>
							</Card>
						</div>

						<div className="col-md-3">
							<Card style={{ width: "16rem" }} className="card-set">
								<Card.Img variant="top" className="card-img" src={img8} />
								<Card.Body className="card-body">
									<Card.Title className="card-title">
										<b>Movie Name</b>
										<p>xxxxxx</p>
									</Card.Title>

									<Button
										variant="success"
										className="card-button"
										href="/Retail"
									>
										Book My Show
									</Button>

									<br></br>
									<br></br>
								</Card.Body>
							</Card>
						</div> */}
					</Row>
				</Container>
			</div>
		);
	}
}
