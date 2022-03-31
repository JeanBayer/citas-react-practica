import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes);
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      <h2 className="font-black text-center text-3xl">Listado pacientes</h2>
      <p className="text-center text-lg mb-3">
        Administra tus Pacientes y {""}
        <span className="font-bold text-indigo-600">Citas</span>
      </p>
      <div className="md:h-screen overflow-y-scroll w-full">
        {pacientes.map(paciente => {
          return (
            <Paciente
              paciente={paciente}
              key={paciente.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListadoPacientes;
