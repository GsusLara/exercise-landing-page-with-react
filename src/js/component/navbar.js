import React from "react";

export function Navbar() {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg navbar-dark"
				style={{ backgroundColor: "#385A48" }}>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Bienvenido
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Destinos
							</a>
							<a className="nav-link" href="#">
								Hospedajes
							</a>
							<a className="nav-link" href="#">
								tipo de cambio
							</a>
							<a
								className="nav-link disabled"
								href="#"
								tabIndex="-1"
								aria-disabled="true">
								ingreso
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
