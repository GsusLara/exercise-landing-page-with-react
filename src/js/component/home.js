import React from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Carta } from "./carta";
import { Footer } from "./footer";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<Carta />
			<Footer />
		</div>
	);
}
