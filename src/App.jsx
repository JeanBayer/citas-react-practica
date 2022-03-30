import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {


  return (
   <div className="container mx-auto">
      <Header></Header>
      <div className="md:flex mt-12 mx-5">
          <Formulario></Formulario>
          <ListadoPacientes></ListadoPacientes>
      </div>
   </div>
  )
}

export default App
