import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [equipo, setEquipo] = useState([]);
	useEffect(() => {
		//console.log("Hola");
		//para ejecutar el obtenerDatos tenemos que llamarlo
		obtenerDatos();
	}, []);
	//agregamos los corchetes para que el useEffect se realice solo una vez

	//usaremos API  Esta función podríamos usarla dentro de useEffect
	const obtenerDatos = async () => {
		//el fecth nos ayuda a acceder a la API. Esto nos devuelve la data
		const data = await fetch("https://jsonplaceholder.typicode.com/users");
		//trasformaremos la data a JSON
		const users = await data.json();
		console.log(users);
		setEquipo(users);
	};

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			{/* {<p>{JSON.stringify(equipo)}</p>} */}
			<ul>
				{equipo.map(item => (
					<li key={item.id}>
						{item.name} - {item.email}
					</li>
				))}
			</ul>
		</div>
	);
}
