import React, { useState, useEffect } from "react";

export function Civilization() {
	const [planets, setPlanets] = useState([]);

	const url = "https://www.swapi.tech/api/planets/";

	useEffect(() => {
		obtenerDatos();
	}, []);
	const obtenerDatos = async () => {
		await fetch(url)
			.then(res => res.json())
			.then(data => setPlanets(data))
			.catch(err => console.error(err));
	};
	const planetCard = planets.map((planet, i) => {
		return (
			<div className="card-group" key={i}>
				<div className="card">
					<img
						className="card-img-top"
						src="http://www.spoon-tamago.com/wp-content/uploads/2015/12/takodana-1.jpg"
						style={{ width: "400px", height: "300px" }}
					/>
					<div className="card-body">
						<h5 className="card-title">{planet.name}</h5>
						<p className="card-text">l</p>
					</div>
					<div className="card-body">
						<a href={planets.url} className="btn btn-primary">
							More about {planet.name}
						</a>
					</div>
				</div>
			</div>
		);
	});
	return <div>{planetCard}</div>;
}
