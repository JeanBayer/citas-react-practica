import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  const generarId = () => {
    const id = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
    console.log(id);
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId(),
    };

    setPacientes([...pacientes, objetoPaciente]);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 h-full">
      <h2 className="font-black text-center text-3xl">
        Seguimimento Pacientes
      </h2>
      <p className="text-center text-lg  mb-3">
        Añade pacientes y {""}
        <span className="font-bold text-indigo-600">administralos</span>
      </p>
      <form action="" onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded-lg w-full py-5 px-5 mb-5">
          {error && <Error>Todos los pasos son necesarios</Error>}
          <div className="mb-3">
            <label
              htmlFor="mascota"
              className="block text-gray-700 font-bold uppercase"
            >
              Nombre mascota
            </label>
            <input
              id="mascota"
              className=" rounded-md border-2 p-2 mt-2 placeholder-gray-400 w-full"
              type="text"
              placeholder="Nombre de la mascota"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="propietario"
              className="block text-gray-700 font-bold uppercase"
            >
              Nombre del propietario
            </label>
            <input
              id="propietario"
              className=" rounded-md border-2 p-2 mt-2 placeholder-gray-400 w-full"
              type="text"
              placeholder="Nombre de la mascota"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold uppercase"
            >
              email
            </label>
            <input
              id="email"
              className=" rounded-md border-2 p-2 mt-2 placeholder-gray-400 w-full"
              type="email"
              placeholder="Nombre de la mascota"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="alta"
              className="block text-gray-700 font-bold uppercase"
            >
              alta
            </label>
            <input
              id="alta"
              className=" rounded-md border-2 p-2 mt-2 placeholder-gray-400 w-full"
              type="date"
              placeholder="Nombre de la mascota"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="alta"
              className="block text-gray-700 font-bold uppercase"
            >
              sintomas
            </label>
            <textarea
              id="sintomas"
              className=" rounded-md border-2 p-2 mt-2 placeholder-gray-400 w-full"
              placeholder="Sintomas de la mascota"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
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
  );
};

export default Formulario;
