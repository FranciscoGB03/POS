export default function Gato() {
	return (
		<div className="flex justify-start mt-10 h-screen">
			<div className="relative">
				{/* Cuerpo del gato */}
				<div className="bg-gradient-to-r from bg-gray-800 to bg-white-800 w-20 h-20 rounded-full"></div>
				{/* Cabeza del gato con animación */}
				<div className="head bg-gray-800 w-12 h-12 rounded-full absolute top-4 left-8 animate-head"></div>
				{/* Orejas del gato */}
				<div className="bg-gray-800 w-4 h-8 absolute -top-4 left-1 border-t-4 border-l-4 border-gray-700 transform rotate-45 origin-bottom"></div>
				<div className="bg-gray-800 w-4 h-8 absolute -top-4 right-1 border-t-4 border-r-4 border-gray-700 transform -rotate-45 origin-bottom"></div>
				{/* Ojos del gato */}
				<div className="bg-yellow-500 w-2 h-2 absolute top-5 left-11 rounded-full"></div>
				<div className="bg-yellow-500 w-2 h-2 absolute top-5 right-11 rounded-full"></div>
				{/* Nariz del gato */}
				<div className="bg-pink-500 w-2 h-2 absolute top-8 left-9 rounded-full"></div>
				{/* Bigotes del gato */}
				<div className="bg-gray-500 w-4 h-0.5 absolute top-12 left-10 transform rotate-45 origin-bottom"></div>
				<div className="bg-gray-500 w-4 h-0.5 absolute top-12 right-10 transform -rotate-45 origin-bottom"></div>
				<div className="bg-gray-500 w-4 h-0.5 absolute top-11 left-10 transform rotate-45 origin-bottom"></div>
				<div className="bg-gray-500 w-4 h-0.5 absolute top-11 right-10 transform -rotate-45 origin-bottom"></div>
				{/* Cuerpo del gato */}
				<div className="bg-gray-800 w-14 h-6 absolute top-15 left-3 rounded-full"></div>
				<div className="bg-gray-800 w-14 h-6 absolute top-16 right-3 rounded-full"></div>
				{/* Cola del gato */}
				<div className="bg-gray-800 w-4 h-4 absolute top-17 left-12 rounded-full"></div>
				<div className="bg-gray-800 w-4 h-4 absolute top-17 right-12 rounded-full"></div>
				{/* Patas delanteras del gato */}
				<div className="bg-gray-800 w-4 h-12 absolute top-22 left-6 rounded-full"></div>
				<div className="bg-gray-800 w-4 h-12 absolute top-22 right-6 rounded-full"></div>
				{/* Patas traseras del gato */}
				<div className="bg-gray-800 w-4 h-12 absolute top-22 left-2 rounded-full"></div>
				<div className="bg-gray-800 w-4 h-12 absolute top-22 right-2 rounded-full"></div>
			</div>
		</div>
	);
}
