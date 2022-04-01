import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado pacientes</h2>
          <p className="text-center text-lg mb-3">
            Administra tus Pacientes y {""}
            <span className="font-bold text-indigo-600">Citas</span>
          </p>
          <div className="md:h-screen overflow-y-scroll w-full">
            {pacientes.map((paciente) => {
              return (
                <Paciente
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                  key={paciente.id}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
          <p className="text-center text-lg mb-3">
            Agrega tus Pacientes y {""}
            <span className="font-bold text-indigo-600">Aparecerán</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
