import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {
	const [tasks, setTasks] = useState("");
	const [listTasks, setlistTasks] = useState([]);
	const addTasks = (a) => {
		a.preventDefault();
		
		let tempList = [...listTasks];
		tempList.push({label:tasks,done:false}); //esto cambia porque el mapeo ha cambiado, sin esto no se agrega el texto de las tareas//
		setlistTasks(tempList);
		setTasks("");
	};

	
useEffect(() => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/angelapatarroyor", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			setlistTasks(data);
		})
		.catch((error) => {
			console.log(error);
		});
}, []);

	const handleInputChange = (a) => {
		setTasks(a.target.value);
	};

	const deleteTasks = (indice) => {
		let listaRemovida = listTasks.filter(
			(item, posicion) => posicion !== indice
		);
		setlistTasks(listaRemovida);
	};
	const numberTasks = listTasks.length;
	return (
		<div className="caja">
			<div className="title mx-auto" style={{ width: "30rem" }}>
				<h2 className="text-center display-1">TO DO LIST</h2>
			</div>
			<div className="card mx-auto" style={{ width: "50rem" }}>
				<ul className="list-group list-group-flush">
					<li className="list-group-item d-flex">
						<form
							className="me-auto p-2 text-muted fs-4 border-0 container-fluid"
							onSubmit={addTasks}>
							<input
								className="border-0 text-muted fs-4 container-fluid"
								type="text"
								placeholder="What needs to be done?"
								onChange={handleInputChange}
								value={tasks}></input>
						</form>
					</li>
					{listTasks.map((element, indice) => (
						<li className="list-group-item d-flex" key={indice}>
							<p className="me-auto p-2 text-muted fs-4">
								{element.label}
							</p>
							<button
								className="btn fs-4 btn-outline-light border-0"
								onClick={() => deleteTasks(indice)}>
								<i className="far fa-trash-alt"></i>
							</button>
						</li>
					))}
				</ul>
			</div>
			<p className="me-auto p-3 fs-5 text-center ">
				<mark>You have {numberTasks} tasks to finish</mark>
			</p>
		</div>
	);
};

export default Home;
