const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">      
        <h2 className="font-black text-center text-3xl">Seguimimento Pacientes</h2>
        <p className="text-center text-lg mt-5 mb-10">Añade pacientes y {""} 
            <span className="font-bold text-indigo-600">administralos</span>
        </p>
        <form action="">
            <div className="bg-white shadow-md rounded-lg w-full py-10 px-5 mb-10">
                <div className="mb-5">
                    <label 
                        htmlFor="mascota" 
                        className="block text-gray-700 font-bold uppercase">
                        Nombre mascota
                    </label>
                    <input 
                        id="mascota" 
                        className=" rounded-md border-2 p-2 mt-2 placeholder-gray-400 w-full" 
                        type="text" 
                        placeholder="Nombre de la mascota"
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="propietario" 
                        className="block text-gray-700 font-bold uppercase">
                        Nombre del propietario
                    </label>
                    <input 
                        id="propietario" 
                        className=" rounded-md border-2 p-2 mt-2 placeholder-gray-400 w-full" 
                        type="text" 
                        placeholder="Nombre de la mascota"
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="email" 
                        className="block text-gray-700 font-bold uppercase">
                        email
                    </label>
                    <input 
                        id="email" 
                        className=" rounded-md border-2 p-2 mt-2 placeholder-gray-400 w-full" 
                        type="email" 
                        placeholder="Nombre de la mascota"
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="alta" 
                        className="block text-gray-700 font-bold uppercase">
                        alta
                    </label>
                    <input 
                        id="alta" 
                        className=" rounded-md border-2 p-2 mt-2 placeholder-gray-400 w-full" 
                        type="date" 
                        placeholder="Nombre de la mascota"
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="alta" 
                        className="block text-gray-700 font-bold uppercase">
                        sintomas
                    </label>
                    <textarea 
                        id="sintomas" 
                        className=" rounded-md border-2 p-2 mt-2 placeholder-gray-400 w-full" 
                        placeholder="Sintomas de la mascota"
                    />
                </div>
                <input 
                    type="submit" 
                    className="w-full bg-indigo-600 text-white text-bold rounded-md p-3 text-1xl hover:bg-indigo-700 transition-all shadow-md uppercase" 
                    value="Agregar paciente" 
                />
            </div>
        </form>
    </div>
  )
}

export default Formulario