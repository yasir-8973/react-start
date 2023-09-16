import React from 'react';
import { Link } from "react-router-dom";
import './nofile.css';

export default function ErrorPage (){

	return (
		<div className="errpagecontainer">
			<br/>
			<h1>Error 404</h1>
				<p >Oops! Something is wrong.</p>
				<Link className="linkdecor borderbtn" to={`/login`}>
					Go back to Login.
				</Link>
		</div>
	)
}