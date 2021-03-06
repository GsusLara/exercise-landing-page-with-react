import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Visita Costa Rica!!</h1>
			<p className="lead">Un pais de aventuras y naturaleza.</p>
			<hr className="my-4" />
			<p>
				Costa Rica es parte de los paices que compenen America central,
				cuenta con dos Aereopuertos internacionales con vuelos directos
				desde diversos paises como Espana, Francia, Estados Unidos y
				más.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Vuelos directos
				</a>
			</p>
		</div>
	);
}
