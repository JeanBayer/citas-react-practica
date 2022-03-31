const Paciente = ({ paciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;

  return (
    <div className="bg-white shadow-md rounded-lg w-5/5 lg:mr-5 py-5 px-5 mb-10 lg:ml-3">
      <div className="mb-3">
        <label className="text-gray-700 font-bold uppercase">
          Mascota: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </label>
      </div>
      <div className="mb-3">
        <label className="text-gray-700 font-bold uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </label>
      </div>
      <div className="mb-3">
        <label className="text-gray-700 font-bold uppercase">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </label>
      </div>
      <div className="mb-3">
        <label className="text-gray-700 font-bold uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </label>
      </div>
      <div className="mb-3">
        <label className="text-gray-700 font-bold uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">{sintomas}</span>
        </label>
      </div>
    </div>
  );
};

export default Paciente;
