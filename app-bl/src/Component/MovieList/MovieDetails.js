import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
	const { name, director, actors } = useParams();

	return (
		<>
			<div style={{ marginTop: "20px" }}>
				<h4>{name}</h4>
				<hr />
				<dl className="row">
					<dt className="col-sm-3">Director</dt>
					<dd className="col-sm-9">{director}</dd>

					<dt className="col-sm-3">Actors</dt>
					<dd className="col-sm-9">{actors}</dd>
					<dt className="col-sm-3">Post Category</dt>
					<dd className="col-sm-9"></dd>
				</dl>
			</div>
		</>
	);
};

export default MovieDetails;
