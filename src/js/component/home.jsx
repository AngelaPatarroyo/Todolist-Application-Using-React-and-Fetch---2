import React, { useState } from "react";

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState("");
	const [listaTareas, setListaTareas] = useState([]);
	const agregarTareas = (e) => {
		e.preventDefault();
		let tempLista = [...listaTareas];
		tempLista.push(tareas);
		setListaTareas(tempLista);
		setTareas("");
	};

	const handleInputChange = (e) => {
		setTareas(e.target.value);
	};

	const eliminarTareas = (indice) => {
		let listaRemovida = listaTareas.filter(
			(item, posicion) => posicion !== indice
		);
		setListaTareas(listaRemovida);
	};
	const numeroTareas = listaTareas.length;
	return (
		<div className="caja">
			<div className="titulo mx-auto" style={{ width: "50rem" }}>
				<h1 className="text-center display-1">todos</h1>
			</div>
			<div className="card mx-auto" style={{ width: "50rem" }}>
				<ul className="list-group list-group-flush">
					<li className="list-group-item d-flex">
						<form
							className="me-auto p-2 text-muted fs-4 border-0 container-fluid"
							onSubmit={agregarTareas}>
							<input
								className="border-0 text-muted fs-4 container-fluid"
								type="text"
								placeholder="What needs to be done?"
								onChange={handleInputChange}
								value={tareas}></input>
						</form>
					</li>
					{listaTareas.map((element, indice) => (
						<li className="list-group-item d-flex" key={indice}>
							<p className="me-auto p-2 text-muted fs-4">
								{element}
							</p>
							<button
								className="btn fs-4 btn-outline-light border-0"
								onClick={() => eliminarTareas(indice)}>
								<i className="fa-regular fa-trash-can-xmark"></i>
							</button>
						</li>
					))}
				</ul>
			</div>
			<p className="me-auto p-2 text-muted fs-5 text-center display-1">
				Te quedan {numeroTareas} tareas por terminar
			</p>
		</div>
	);
};

export default Home;
