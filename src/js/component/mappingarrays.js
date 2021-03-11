import React, { useState } from "react";

export function ArrayMapping() {
	const temperatura = 21;
	const image =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM3R-JwSCiQb9ZM1at1oPcy-fQ6eBR56qOw&usqp=CAU";
	const [numero, setNumero] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	//con ... concatenamos arrays
	const handleClick = () => {
		setNumero([...numero, numero[numero.length - 1] + 1]);
	};
	return (
		<div>
			<h3>¿Frío o calor?</h3>
			<h4>{temperatura > 20 ? "Calor" : "Frío"}</h4>
			<img src={image} />
			<h2>Numeros</h2>
			<button onClick={handleClick}>Agregar Númeor</button>
			<ul>
				{numero.map((item, index) => {
					return (
						<li key={index}>{item < 6 ? item * 2 : item + 2}</li>
					);
				})}
			</ul>
		</div>
	);
}
