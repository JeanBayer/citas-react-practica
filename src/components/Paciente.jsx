const Paciente = () => {
  return (
    <div className="bg-white shadow-md rounded-lg w-5/5 lg:mr-5 py-5 px-5 mb-10 lg:ml-3">
        <div className="mb-3">
            <label 
                className="text-gray-700 font-bold uppercase">
                Mascota: {""}
                <span className="font-normal normal-case">Hook</span>
            </label>
        </div>
        <div className="mb-3">
            <label 
                className="text-gray-700 font-bold uppercase">
                Propietario: {""}
                <span className="font-normal normal-case">Jhan</span>
            </label>
        </div>
        <div className="mb-3">
            <label 
                className="text-gray-700 font-bold uppercase">
                Email: {""}
                <span className="font-normal normal-case">correo@correo.com</span>
            </label>
        </div>
        <div className="mb-3">
            <label 
                className="text-gray-700 font-bold uppercase">
                Fecha Alta: {""}
                <span className="font-normal normal-case">22 Diciembre 2021</span>
            </label>
        </div>
        <div className="mb-3">
            <label 
                className="text-gray-700 font-bold uppercase">
                Sintomas: {""}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus id vero, provident qui ducimus cum! Nesciunt molestiae exercitationem in laborum rem, perspiciatis provident fugit atque dolores adipisci recusandae facere nostrum.</span>
            </label>
        </div>
  </div>
  )
}

export default Paciente