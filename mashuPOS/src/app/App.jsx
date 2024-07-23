import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Estrella } from "../components/pruebas/Estrella";
import Gato from "../components/pruebas/Gato";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");
	const [pokemons, setPokemons] = useState([]);
	const [productos, setProductos] = useState([]);
	const [pro, setPro] = useState("");
	const [count, setCount] = useState(0);
	// Función asincrónica para llamar a get_all_pokemons
	async function getAllPokemons() {
		try {
			const response = await invoke("get_all_pokemons");
			setPokemons(response); // Actualiza el estado con la respuesta de la API
		} catch (error) {
			console.error("Error fetching Pokémon data:", error);
			// Maneja el error, por ejemplo, mostrando un mensaje al usuario
		}
	}

	// useEffect para llamar a getAllPokemons al cargar el componente
	useEffect(() => {
		getAllPokemons();
	}, []); // Se ejecuta solo una vez al montar el componente

	// Función para manejar el envío del formulario y llamar a greet
	async function handleFormSubmit(e) {
		e.preventDefault();
		try {
			const response = await invoke("greet", { name });
			setGreetMsg(response);
		} catch (error) {
			console.error("Error greeting:", error);
			// Maneja el error, por ejemplo, mostrando un mensaje al usuario
		}
	}
	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			setProductos([...productos, pro]);
			setCount(count + 1);
		}
	};

	return (
		<div id="container" className="realtive h-screen p-2 gap-2">
			{/* Header */}
			<header className="[grid-area:header] bg-gray-800 text-white flex">
				<Estrella />
				<h1 className="text-2xl font-bold">Header</h1>
				<h1 className="text-2xl font-bold">Header</h1>
			</header>

			{/* Contenedor izquierdo con scroll */}
			<main className="[grid-area:main] bg-red-200 text-red-900  rounded-md  flex-col flex overflow-y-auto">
				<div className="">
					<input
						onKeyDown={handleKeyDown}
						value={pro}
						onChange={(e) => setPro(e.target.value)}
						type="text"
						className="min-w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
						placeholder="Escribe algo..."
					/>
				</div>
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="sticky  top-0 bg-red-200 text-xl font-bold">
							<tr>
								<th>nombre</th>
								<th>nombre</th>
								<th>nombre</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							{productos.map((pro) => (
								<tr className="hover:bg-red-300">
									<td>{pro}</td>
									<td>{pro}</td>
									<td>{pro}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="mt-10"></div>
			</main>

			{/* Contenedor derecho */}
			<aside className="[grid-area:aside] flex-col">
				<div className="flex-1 bg-gradient-to-l from-blue-500 to-green-500 p-4">
					<h2 className="text-xl font-bold">Contenedor Derecho Arriba</h2>
					<h2 className="text-xl font-bold">Contenedor Derecho Arriba</h2>
					<h2 className="text-xl font-bold">Contenedor Derecho Arriba</h2>
					<h2 className="text-xl font-bold">Contenedor Derecho Arriba</h2>
					<h2 className="text-xl font-bold">Contenedor Derecho Arriba</h2>
					<h2 className="text-xl font-bold">Contenedor Derecho Arriba</h2>
				</div>
				<div className="bg-yellow-500 p-4">
					<h2 className="text-xl font-bold">Contenedor Derecho Abajo</h2>
					<h2 className="text-xl font-bold font-serif">
						total:
						<div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold">
							{count}
						</div>
					</h2>
				</div>
			</aside>
			{/* Pie de página */}
			<footer className="[grid-area:footer] bg-gray-800 text-white">
				<p className="text-center">Pie de página</p>
				<p className="text-center">Pie de página</p>
			</footer>
		</div>
	);
}

export default App;
