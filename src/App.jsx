import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="md:flex mt-6 mx-5">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        ></Formulario>
        <ListadoPacientes pacientes={pacientes}></ListadoPacientes>
      </div>
    </div>
  );
}

export default App;
