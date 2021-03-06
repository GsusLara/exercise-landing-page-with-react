import React from "react";
import PropTypes from "prop-types";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Carta } from "./carta";
import { Footer } from "./footer";
import foto1 from "../../img/gandoca-manzanillo.jpg";
import foto2 from "../../img/Playa-Jaco-Benches.jpg";
import foto3 from "../../img/roca bruja.jpg";
import foto4 from "../../img/playa-santa-teresa-puntarenas.jpg";
//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex justify-content-center">
					<Carta
						ima={foto1}
						titulo={"Gandoca Manzanillo"}
						texto={
							"Ubicada en el caribe sur de Costa Rica, un hermoso paraiso tropical rodeado de fauna y animales silvestres como el mono aullador y el oso perezoso"
						}
					/>
					<Carta
						ima={foto2}
						titulo={"Jacó"}
						texto={
							"hermosa playa para practicar el surf, se encuentra en la provincia de Puntarenas a tan solo una hora y treinta minutos de la capital San José"
						}
					/>
					<Carta
						ima={foto3}
						titulo={"Playa Naranjo"}
						texto={
							"Un lugar magico para la practica del surf, con olas perfectas y un paisaje inmejorable, conocida popularmente como roca bruja, no dudes en visitarla."
						}
					/>
					<Carta
						ima={foto4}
						titulo={"Santa Teresa"}
						texto={
							"Otra de las playas surferas mas conocidas en Costa Rica, se encuentra en el pacifico norte del pais donde podras dirfrutas los más bellos atardeceres."
						}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
