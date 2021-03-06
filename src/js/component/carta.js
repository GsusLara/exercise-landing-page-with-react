import React from "react";
import PropTypes from "prop-types";

export function Carta(props) {
	return (
		<div className="card" style={{ width: "25%" }}>
			<img
				className="card-img-top"
				src={props.ima}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.titulo}</h5>
				<p className="card-text">{props.texto}</p>
				<a href="#" className="btn btn-primary">
					visitar
				</a>
			</div>
		</div>
	);
}
Carta.propTypes = {
	ima: PropTypes.array,
	titulo: PropTypes.string,
	texto: PropTypes.string
};
